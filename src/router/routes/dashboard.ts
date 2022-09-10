
import Layout from '@/components/layouts/index.vue'


export const dashboardRoutes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: "ph-briefcase"
    },
    children: [
      {
        path: '/',
        name: 'dashboard.show',
        meta: {
          title: 'Dashboard',
          hidden: true
        },
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: '/profile',
        name: 'dashboard.profile.show',
        meta: {
          title: 'Profile',
          hidden: true
        },
        component: () => import('@/views/dashboard/profile/index.vue')
      },
      {
        path: '/portfolio',
        name: 'dashboard.portfolio.show',
        meta: {
          title: 'Portfolio',
          hidden: true
        },
        component: () => import('@/views/dashboard/portfolio/index.vue')
      },
      {
        path: '/settings',
        name: 'dashboard.settings.show',
        meta: {
          title: 'Settings',
          hidden: true
        },
        component: () => import('@/views/dashboard/settings/index.vue')
      }
    ]
  }
]
