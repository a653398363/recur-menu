<template>
  <div class="sideBar">
    <el-collapse-transition>
      <el-menu
          :default-active="activeItem"
          :collapse="isCollapse"
          unique-opened
          :background-color="background"
          :text-color="textColor"
          :active-text-color="activeTextColor">
          <menuItem  :menus="menuSource"/>
      </el-menu>
    </el-collapse-transition>
  </div>
</template>
<script>
import menuItem from './menuItem'
export default {
  name: 'recurMenu',
  props: {
    menuSource: {
      type: Array
    },
    activeItem: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#545c64'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      default: "#ffd04b"
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    menuItem
  }
}
</script>
<style lang="scss">
  .sideBar {
    .el-menu {
      border-right: none;
    }
  }
</style>
