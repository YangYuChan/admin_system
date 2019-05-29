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
