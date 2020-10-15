import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/myHome',
    name: 'My Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyHome.vue')
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
