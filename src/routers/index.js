import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/index/home'),
        hidden: true
    },
    {
        path: '/home',
        component: () => import('@/views/index/home'),
        hidden: true
    },
    {
        path: '/dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        hidden: true
    },
    {
        path: '/DBY',
        component: () => import('@/views/index/home'),
        hidden: true
    },
]

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()
export default router