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
// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'

console.log('环境变量：', process.env.NODE_ENV)
const app = createApp(App)

// 统一注册el-icon图标
for (let iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName])
}

app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api

app.use(ElementPlus).use(store).use(router).mount('#app')
