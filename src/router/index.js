import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/:notFound(.*)', redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
