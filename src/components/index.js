import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breadCrumb from './common/bread-crumb'
import { quillEditor } from 'vue-quill-editor'// qull富文本编辑器
import CoverImage from './publish/cover-image'
import SelectImage from './publish/select-image'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside)// 注册一个全局组件
    Vue.component('layout-header', layoutHeader)// 注册一个全局主见
    Vue.component('bread-crumb', breadCrumb) // 全局注册面包屑组件
    Vue.component('quill-editor', quillEditor)// 注册一个全局富文本编辑器
    Vue.component('cover-image', CoverImage)// 注册一个封面组件
    Vue.component('select-image', SelectImage)// 注册一个素材库 和上传图片组

    // 全局祖册
  }
}
