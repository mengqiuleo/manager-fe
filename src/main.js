import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'

console.log('环境变量：', process.env.NODE_ENV)
const app = createApp(App)
// axios.get(config.mockApi + '/login').then((res) => {
//   console.log(res)
// })
app.config.globalProperties.$request = request
app.use(ElementPlus).use(store).use(router).mount('#app')
