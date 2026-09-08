import { createRouter, createWebHistory } from 'vue-router'

// Components
import HomeView from '../views/HomeView.vue'

// Interfaces
import { Route } from '@/interfaces/route.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.Path.HOME,
      name: Route.Name.HOME,
      component: HomeView,
    },
    {
      path: Route.Path.ABOUT,
      name: Route.Name.ABOUT,
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
