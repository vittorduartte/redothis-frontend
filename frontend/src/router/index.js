import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

// Pageviews Components
const Login = () => import('@/features/Login');

// Register Routes
const routes = [
    { path: '/login',
      name: 'login',
      meta: {
          title: 'Login'
      },
      component: Login
    }
]

// Object VueRouter
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
