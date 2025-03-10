

import { createRouter, createWebHistory } from 'vue-router'

import Products from '@/views/pages/Products.vue'
import ProductDetails from '@/views/pages/ProductDetails.vue'
import Signup from '@/views/pages/Signup.vue'
import Login from '@/views/pages/Login.vue'
import Profile from '@/views/pages/Profile.vue'
import About from '@/views/pages/About.vue'
import Cart from '@/views/pages/Cart.vue'
import LandingPage from '@/views/pages/LandingPage.vue'


const routes = [

  {path:'/',
    name:'LandingPage',
    component:LandingPage

  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router