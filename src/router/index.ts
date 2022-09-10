/* import { createPinia } from 'pinia' */
import { createRouter, createWebHistory } from 'vue-router'
/* import { useUserStore } from '@/stores/userStore' */
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  linkExactActiveClass: 'is-active-link',
  scrollBehavior: () => ({ left: 0, top: 0 })
})
const whiteList = ['/sign-in', '/sign-up', '/forgot-password', '/not-found']
NProgress.configure({ easing: 'ease', speed: 600, template: '<div class="bar" role="bar"><div class="peg"></div></div>' })

const isAuthenticated = true


router.beforeEach((to, from, next) => {
  NProgress.start()

  if (isAuthenticated) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/sign-in?redirect=${to.path}`)
    }
  }
})

router.afterEach((to: any) => {
  NProgress.done()
  // set page title
  document.title = `${import.meta.env.VITE_APP_NAME} - ${to.meta.title}`
})


export default router