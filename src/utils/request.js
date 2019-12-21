// 封装一个axios
import axios from 'axios'
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

// 相应拦截器
axios.interceptors.response.use(function (response) {
// 成功是执行该函数 状态吗 200/201/204
  return response.data ? response.data : {}
}, function () {
// 失败是执行该参数
})
export default axios
