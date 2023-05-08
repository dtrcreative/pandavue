import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage";
// import PandaPage from "@/pages/PandaPage";
import ProfilePage from "@/pages/ProfilePage";
import AccountsVue from "@/components/AccountsVue";
import BornListVue from "@/components/BornListVue";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/profile',
        component: ProfilePage,
        children: [
            {path: '', component: MainPage},
            {path: 'panda', component: AccountsVue},
            {path: 'bornlist', component: BornListVue},
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
