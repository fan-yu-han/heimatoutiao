// 封装一个axios
import axios from 'axios'
// import router from '../router'
import { Message } from 'element-ui'
import router from '../router'
import JSONBig from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截器
axios.interceptors.request.use(function (config) {
// 请求成功
// config 请求参数配置
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config // 表示会用该config请求进行后台操作
}, function () {
// 请求失败
})

axios.defaults.transformResponse = [function (data) {
  debugger
  return JSONBig.parse(data)
}]

// 相应拦截器
axios.interceptors.response.use(function (response) {
// 成功是执行该函数 状态吗 200/201/204
  return response.data ? response.data : {}
}, function (error) {
// 失败是执行该参数
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 507:
      message = '服务器错误'
      break
    case 401:
      // token 过期或者失败
      // this.$router
      window.localStorage.removeItem('user-token')// 删除过期token
      router.push('.login')
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })// 提示信息
  // 这里要注意 错误执行函数 如果不做任何操作 还会进入到promise then中
  return Promise.reject(error)
})
export default axios
