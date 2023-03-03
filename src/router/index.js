import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: 'plan',
    children: [
      {
        path: '/plan',
        component: () => import('@/views/AppCard/AppCard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
