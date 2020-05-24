<template>
  <div class='sidebarItem'>
    <template v-for="item in menus">
      <!-- 一级菜单 -->
      <template v-if="!item.leaf">
                    <!-- 菜单组 -->
         <el-submenu :index="item.id" :key="item.id">
          <!-- 菜单组显示  -->
          <template slot="title">
            <i v-if='item.icon' :class="item.icon"></i>
            <i class="el-icon-menu" v-else></i>
            <span v-if="show" class="parent-title-cls">{{item.title}}</span>
            <span v-else>{{item.component}}</span>
          </template>
            <sidebar-item class='nest-menu' :key="item.id" :menus='item.children'></sidebar-item>
         </el-submenu>
      </template>
      <template v-else>
        <router-link   :key="item.id"
                    :to="{name:item.component,query:item.query,params:buildParams(item)}">
          <el-menu-item :index="item.id" class='submenu-title-noDropdown'>
            <i v-if='item.icon' :class="item.icon"></i>
            <i class="iconfont iconmenu-home-normal" v-else></i>
            <span v-if="show" class="parent-title-cls">{{item.title}}</span>
            <span v-else>{{item.component}}</span>
          </el-menu-item>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    menus: {
      type: Array
    }
  },
  data () {
    return {
      show: false,
      lang: ''
    }
  },
  created () {
  },
  mounted () {
    this.getLang()
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    buildParams (menu) {
      var params = !menu.params ? {} : menu.params
      params.menuId = menu.keyId
      return params
    },
    getLang () {
      this.lang = localStorage.getItem('lang')
      if (!this.lang || this.lang === 'cn') {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>
<style>
.sidebarItem .el-submenu .el-submenu__title {
  height: 42px;
  line-height: 42px;
}

.sidebarItem .el-menu-item * {
  vertical-align: middle;
}

.sidebarItem .el-submenu .el-menu-item {
  height: 42px;
  font-family: Roboto;
  font-size: 13px;
  line-height: 42px;
  border: 1px solid rgba(255, 255, 255, 0);
}
.sidebarItem .child-title-cls {
  font-family: Roboto;
  font-size: 13px;
  /* color: rgba(92,102,130,1); */
}
.sidebarItem .parent-title-cls {
  font-family: Roboto;
  font-size: 13px;
  /* color: rgba(92,102,130,1); */
  /*font-weight:600px;*/
}
.sidebarItem .menu-tickets-class {
  margin-left: 0px;
}
</style>
