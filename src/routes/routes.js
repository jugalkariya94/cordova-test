import App from '../App.vue'

import HelloWorld from "@/components/HelloWorld";
import List from "@/components/List";


const routes = [{
    path: '/',
    component: App,
    children: [
        {
            path: '',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/list',
            name: 'list',
            component: List,

        }
    ]
}]

export default routes
