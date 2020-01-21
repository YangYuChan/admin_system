import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import G2 from '@antv/g2'
import Cookies from 'js-cookie'
import VueI18n from 'vue-i18n'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/index.scss'
import './assets/font/iconfont.css'

import '@/assets/Rich_text/skins/ui/oxide/skin.min.css'; //富文本样式
import tinymce from 'tinymce/tinymce'; //配置富文本
import 'tinymce/themes/silver/theme.min.js' //引入富文本的主要脚本
import Editor from '@tinymce/tinymce-vue'; //引用富文本组件
import lang from '@/assets/Rich_text/zh_CN.js'; //引用中文语言

import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/fullscreen'

tinymce.addI18n('zh_CN', lang); //注册中文语言
Vue.component('Editor', Editor); //注册全局组件

Vue.config.productionTip = false
// 在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueI18n)
if(process.env.NODE_ENV !== 'production') require('./mock')
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
