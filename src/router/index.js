import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue'),
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (store.getters.isLoggedIn && store.getters.user) {
            next()
            return
        }
        next('/login')
    }

    if (to.matched.some(record => record.meta.guest)) {
        if (!store.getters.isLoggedIn) {
            next()
            return
        }
        next('/profile')
    }

    next()
})

export default router