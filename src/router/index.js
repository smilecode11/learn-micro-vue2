import Vue from 'vue'
import VueRouter from 'vue-router'

import SelectCar from '../pages/SelectCar'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: '/select-car'
}, {
    name: 'SelectCar',
    path: '/select-car',
    component: SelectCar
}]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router;