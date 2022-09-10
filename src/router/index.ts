import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
/* import { useUserStore } from '@/stores/userStore' */
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  linkExactActiveClass: 'is-active-link',
  scrollBehavior: () => ({ left: 0, top: 0 })
})

const whiteList = ['/sign-in', '/sign-up', '/forgot-password', '/reset-password', '/not-found']

const isAuthenticated = true
router.beforeEach((to, from, next) => {
  /* const userStore = useUserStore() */
  if (whiteList.indexOf(to.path) && !isAuthenticated) next({ name: 'sign-in' })
  else next()
})

router.afterEach((to: any) => {
  // set page title
  document.title = `${import.meta.env.VITE_APP_NAME} - ${to.meta.title}`
})


export default router