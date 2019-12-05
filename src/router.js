import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import HittaHit from "./components/HittaHit.vue";
import Dikter from "./components/Dikter.vue";
Vue.use(Router);
const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/Info",
            name: "Info",
            component: Info
        },
        {
            path: "/HittaHit",
            name: "HittaHit",
            component: HittaHit
        },
        {
            path: "/Dikter",
            name: "Dikter",
            component: Dikter
        }
    ]
});
export default router;
