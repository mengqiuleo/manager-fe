/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-09 03:09:50
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'
import storage from './utils/storage'
import api from './api'

console.log('环境变量：', process.env.NODE_ENV)
const app = createApp(App)

app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api
app.use(ElementPlus).use(store).use(router).mount('#app')
