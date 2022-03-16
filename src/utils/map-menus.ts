import { RouteRecordRaw } from 'vue-router'
import dashboard from '@/router/main/analysis/dashboard'
import overview from '@/router/main/analysis/overview'
import category from '@/router/main/product/category'
import goods from '@/router/main/product/goods'
import chat from '@/router/main/story/chat'
import list from '@/router/main/story/list'
import department from '@/router/main/system/department'
import menu from '@/router/main/system/menu'
import role from '@/router/main/system/role'
import user from '@/router/main/system/user'

let firstMenu: any = null

export const mapMenusToRoutes = (userMenus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  // 1.添加所有默认路由
  const allRoutes: RouteRecordRaw[] = [
    dashboard,
    overview,
    category,
    goods,
    chat,
    list,
    department,
    menu,
    role,
    user
  ]
  // 2.递归查找并添加路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
          // 记录下第一个可以显示的页面
          if (!firstMenu) {
            firstMenu = route
          }
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

export { firstMenu }
