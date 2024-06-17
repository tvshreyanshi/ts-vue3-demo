import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LogIn from '@/components/Auth/LogIn.vue'
import RegisterVue from '@/components/Auth/RegisterVue.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RegisterVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
