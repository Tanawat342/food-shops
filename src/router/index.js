import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import MainPageViews from '../views/MainPageViews.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: MainPageViews
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }
  ]
})

export default router
