import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";
import PandaPage from "@/pages/PandaPage";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/panda',
        component: PandaPage
    },
    {
        path: '/login',
        component: LoginPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
