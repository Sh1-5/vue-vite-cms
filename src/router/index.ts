import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const Login = () => import('@/views/login/index.vue')
const Main = () => import('@/views/main/index.vue')
const NotFound = () => import('@/views/not-found/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
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

  if (to.path === '/main') {
    return firstMenu.path
  }
})

export default router
