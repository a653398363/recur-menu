## Recursive-menu
> 使用vue + Element-Ui的一个菜单组件
通用传入数据，自动递归生成菜单支持多层级

> 传入参数 props: {
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