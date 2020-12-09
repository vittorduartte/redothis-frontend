import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const user_verify = (para, deOnde, proximo) => {
    const user = JSON.parse(sessionStorage.getItem('user_logged')) ? JSON.parse(sessionStorage.getItem('user_logged')) : { id: false };
    if (user.id) {
        proximo();
    } else {
        proximo("/login");
    }
}

// Pageviews Components
const Login = () => import('@/features/Login');
const Painel = () => import('@/features/Painel');

// Register Routes
const routes = [
    {
        path: '/',
        name: 'home',
        beforeEnter: user_verify,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login'
        },
        component: Login
    },
    {
        path: '/painel',
        name: 'painel',
        beforeEnter: user_verify,
        meta: {
            title: 'Painel'
        },
        component: Painel
    }
]

// Object VueRouter
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
