import { createRouter, createWebHistory } from 'vue-router'
import registerView from '@/views/registerView.vue'
import formView from '@/views/formView.vue'
import dashboardViewVue from '@/views/dashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: formView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardViewVue
    }
  ]
})

export default router
