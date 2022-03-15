import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import localCache from 'utils/cache'

const Login = () => import('views/login/index.vue')
const Main = () => import('views/main/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
