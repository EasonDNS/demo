import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { localcach, mapMenu } from '@/utils'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue'),
    children: [
      {
        path: 'go',
        name: 'go',
        component: () => import('@/views/main/system/user/user.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localcach.get('token')
    if (!token) {
      return '/login'
    }
    if (to.path === '/main') {
      return mapMenu.firstMenu.url
    }
  }
})

export default router
