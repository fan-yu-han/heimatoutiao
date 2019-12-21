import Vue from 'vue'
import App from './App.vue'
import './permisson'
import router from './router'
import ElementUI from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less' // 引入初始化样式
import axios from './utils/request'

Vue.prototype.$axios = axios
Vue.use(ElementUI)// 全局祖册
Vue.use(Component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
