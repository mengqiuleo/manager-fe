/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-10 00:38:53
 * @LastEditTime: 2022-08-11 02:42:48
 */
import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import router from './../router'
const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

service.interceptors.request.use((req) => {
  const headers = req.headers
  if (!headers.Authorization) headers.Authorization = 'Bear Pan'
  return req
})

service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    return data
  } else if (code === 50001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    }, 15000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  if (typeof options.mock != 'undefined') {
    config.mock = options.mock
  }
  if (config.env === 'production') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    })
  }
})

export default request
