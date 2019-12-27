import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breadCrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor'// qull富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)
    Vue.component('layout-header', layoutHeader)// 注册一个全局主见
    Vue.component('bread-crumb', breadCrumb) // 全局注册面包屑组件
    Vue.component('quill-editor', quillEditor)

    // 全局祖册
  }
}
