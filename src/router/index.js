import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home,
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎页'
        },
        component: Welcome
      },
      {
        name: 'login',
        path: '/login',
        meta: {
          title: '登录'
        },
        component: Login
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
