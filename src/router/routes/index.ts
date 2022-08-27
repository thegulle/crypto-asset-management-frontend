import { dashboardRoutes } from './dashboard'
const routes = [
  {
    path: '/sign-in',
    name: 'sign-in',
    meta: {
      title: 'Sign In',
      hidden: true
    },
    component: () => import('@/views/auth/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    meta: {
      title: 'Sign Up',
      hidden: true
    },
    component: () => import('@/views/auth/SignUp.vue')
  },
  ...dashboardRoutes
]

export default routes