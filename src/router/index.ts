import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/index',
    name:'IndexView',
    component:() => import ('@/views/IndexView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Admin/Product/ProductView.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/Admin/User/UserView.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
