import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './route'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
        // return { x: 0, y: 1000 }
        if(to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',

            };

        }

    }
});

router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    // console.log(next);
    next();
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
