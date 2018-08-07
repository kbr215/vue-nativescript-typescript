import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import Home from './../components/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: 'Home',
            },
        },
        {path: '*', redirect: '/home'}
    ],
} as any);

router.replace('/home')

export default router
