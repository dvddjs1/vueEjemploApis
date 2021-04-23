import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Busqueda from '../views/Busqueda.vue'
import Inicio from '../views/Inicio.vue'

const routes = [{
        path: '/',
        component: Inicio
    },
    {
        path: '/busqueda',
        component: Busqueda
    }
]

export default new Router({
    mode: 'hash',
    // scrollBehavior: () => ({ y: 0 }),
    routes
})