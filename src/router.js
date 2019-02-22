import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue')
        }
    ]
});
