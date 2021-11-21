import { RouteRecordRaw } from 'vue-router'

const pages: RouteRecordRaw[] = [
  {
    name: '_home',
    path: '/',
    component: () => import('~/pages/Home/index.vue'),
  },
  {
    name: '_login',
    path: '/login',
    component: () => import('~/pages/Auth/login.vue'),
  },
]

const notFound: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  component: () => import('~/pages/404.vue'),
}

export const routes = [
  ...pages,
  notFound,
]
