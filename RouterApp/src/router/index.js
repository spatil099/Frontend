import AboutViewVue from "@/views/AboutView.vue";
import HomeViewVue from "@/views/HomeView.vue";
import CarViewVue from "@/views/CarView.vue"
import ContactViewVue from "@/views/ContactView.vue"
import View404Vue from "@/views/View404.vue" 
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component:HomeViewVue,
            name:'Home'
        },
        {
            path: "/home",
            redirect:"/"
        },
        {
            path: "/about",
            component:AboutViewVue,
            name:'About'
        },
        {
            path: "/cars/:id",
            name:"car",
            component:CarViewVue,
            children:[
                {
                    path: "contact",
                    component: ContactViewVue
                }
            ]
        },
        {
            path:"/:catchall(.*)*",
            component: View404Vue
        }
    ]
})

export default router