import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import localcach from '@/utils/localcach'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
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
  }
})

export default router
