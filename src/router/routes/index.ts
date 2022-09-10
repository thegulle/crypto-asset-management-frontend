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
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {
      title: 'Forgot Password',
      hidden: true
    },
    component: () => import('@/views/auth/ForgotPassword.vue')
  },
  ...dashboardRoutes
]

export default routes