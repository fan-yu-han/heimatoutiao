import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)
    // 全局祖册
  }
}
