import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstViewVue from '@/views/FirstView.vue'
import SecondViewVue from '@/views/SecondView.vue'
import ThirdViewVue from '@/views/ThirdView.vue'
import FourthViewVue from '@/views/FourthView.vue'
import FifthViewVue from '@/views/FifthView.vue'
import SixthViewVue from '@/views/SixthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/First',
      name: 'First',
      component: FirstViewVue
    },
    {
      path: '/Second',
      name: 'Second',
      component: SecondViewVue
    },
    {
      path: '/Third',
      name: 'Third',
      component: ThirdViewVue
    },
    {
      path: '/Fourth',
      name: 'Fourth',
      component: FourthViewVue
    },
    {
      path: '/Fifth',
      name: 'Fifth',
      component: FifthViewVue
    },
    {
      path: '/Sixth',
      name: 'Sixth',
      component: SixthViewVue
    }
  ]
})

export default router
