
import Layout from '@/components/layouts/index.vue'


export const dashboardRoutes = [
  {
    path: '/dashboard',
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
      }
    ]
  }
]
