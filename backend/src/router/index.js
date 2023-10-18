import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue"
import Dashboard from "../views/Dashboard.vue"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import NotFound from "../components/NotFound.vue"
import Products from "../views/Products.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Register from "../views/Register.vue"

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
            {
                path: 'products',
                name: 'app.products',
                component: Products
            },
        ]
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresGuest: false
        },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        },
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        },
    },
    {
        path: '/register',
        name: 'registeraccount',
        component: Register,
        meta: {
            requiresGuest: true
        },
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

/* router.beforeEach(( to, from, next ) => {
    if ( to.meta.requiresAuth && !store.state.user.token ) {
        next ({ name: 'login' })
    }
    else if (to.meta.requiresGuest && store.state.user.token ) {
        next ({ name: 'app.dashboard' })
    }
    else {
        next ()
    }
}) */

export default router;