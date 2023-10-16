import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue'
import MainPageViews from '../views/MainPageViews.vue'
import ProductDetailViews from '../views/ProductDetailViews.vue'
import FoodDetailViews from '../views/FoodDetailViews.vue'
import SweetDetailViews from '../views/SweetDetailViews.vue'
import DrinkDetailViews from '../views/DrinkDetailViews.vue'
import FoodProductViews from '../views/FoodProductViews.vue'
import SweetProductViews from '../views/SweetProductViews.vue'
import DrinkProductViews from '../views/DrinkProductViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPageViews
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailViews,
      props: true
    },
    {
      path: '/food/:id',
      name: 'foodDetail',
      component: FoodDetailViews,
      props: true
    },
    {
      path: '/sweet/:id',
      name: 'sweetDetail',
      component: SweetDetailViews,
      props: true
    },
    {
      path: '/drink/:id',
      name: 'drinkDetail',
      component: DrinkDetailViews,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/food',
      name: 'food',
      component: FoodProductViews
    },
    {
      path: '/sweet',
      name: 'sweet',
      component: SweetProductViews
    },
    {
      path: '/drink',
      name: 'drink',
      component: DrinkProductViews
    }
  ]
})

export default router
