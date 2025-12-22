import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

/**
 * 自动加入demos的路由列表
 * @param routes 默认的路由列表
 * @returns 加入demos的路由列表
 */
function loadDemosRoutes(routes: RouteRecordRaw[]) {
  const modules = import.meta.glob<any>('@/views/demos/**/*.vue')
  Object.keys(modules).forEach((key: string) => {
    const match = key.match(/\/views\/(demos\/[^/]+)\//)
    if (match) {
      routes.push({
        path: `/${match[1]}`,
        component: modules[key],
      })
    }
  })

  return routes
}

export default function newCreateRouter(app: any) {
  const router = createRouter({
    routes: loadDemosRoutes(routes),
    history: createWebHashHistory(),
  })
  app.use(router)
}
