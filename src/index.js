// src/index.js
// 这里import 的 recurMenu和recurMenu.vue的name属性名相同 ！

import recurMenu from './components/recurMenu.vue'

recurMenu.install = Vue => Vue.component(recurMenu.name, recurMenu) // 给组件配置install方法 

export default recurMenu;
