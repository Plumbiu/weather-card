import { createRouter, createWebHashHistory } from 'vue-router'
import Future from '@/views/Future/Future.vue'
import Live from '@/views/Live/Live.vue'
const routes = [
  {
    path: '/',
    redirect: '/live',
  },
  {
    path: '/future',
    component: Future
  },
  {
    path: '/live',
    component: Live
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
