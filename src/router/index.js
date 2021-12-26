import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/1',
    name: '1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/1.vue')
  },
  {
    path: '/2',
    name: '2',
    component: () => import('../views/2.vue')
  },
  {
    path: '/3',
    name: '3',
    component: () => import('../views/3.vue')
  },
  {
    path: '/4',
    name: '4',
    component: () => import('../views/4.vue')
  },
  {
    path: '/5',
    name: '5',
    component: () => import('../views/5.vue')
  },
  {
    path: '/6',
    name: '6',
    component: () => import('../views/6.vue')
  },
  {
    path: '/7',
    name: '7',
    component: () => import('../views/7.vue')
  },
  {
    path: '/8',
    name: '8',
    component: () => import('../views/8.vue')
  },
  {
    path: '/9',
    name: '9',
    component: () => import('../views/9.vue')
  },
  {
    path: '/10',
    name: '10',
    component: () => import('../views/10.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
