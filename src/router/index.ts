import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryViewVue from '../views/GalleryViewVue.vue'
import MenuItem from '@/components/MenuItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: GalleryViewVue
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
