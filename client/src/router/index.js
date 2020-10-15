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
    path: '/history',
    name: 'Exercise History',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExerciseHistory.vue')
  },
  {
    path: '/add',
    name: 'Add Exercise',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddExercise.vue')
  },
  {
    path: '/manageExercises',
    name: 'Manage Exercises',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminManageExercises.vue')
  },
  {
    path: '/manageUsers',
    name: 'Manage Users',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminManageUsers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
