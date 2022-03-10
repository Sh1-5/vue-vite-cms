import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const Login = () => import('@/views/login/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
