import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import routes from "./routes";

const router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    scrollBehavior: () => ({ y: 0 }),
    routes:  routes
})

export default router
