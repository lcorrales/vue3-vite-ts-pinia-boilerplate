import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Example",
        component: () => import("../modules/example/pages/Example.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../modules/example/pages/About.vue")
    },
    {
        path: "/search",
        name: "Search",
        redirect: "https://app2.salud360.cr/",
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;