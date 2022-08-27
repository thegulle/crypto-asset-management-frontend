import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
/* import { useUserStore } from '@/stores/userStore' */
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
const whiteList = ['/sign-in', '/sign-up', '/forgot-password', '/reset-password', '/not-found']
/* router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if ((to.name !== 'sign-in' && to.name !== 'sign-up') && !userStore.isLoggedIn) {
    next({ name: 'home' })
  }
  else {
    next()
  }
}) */
const isAuthenticated = true
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) && !isAuthenticated) next({ name: 'sign-in' })
  else next()
})


export default router