import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";
import PandaPage from "@/pages/PandaPage";
import ProfilePage from "@/pages/ProfilePage";

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
    {
        path: '/profile',
        component: ProfilePage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
