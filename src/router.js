import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
Vue.use(Router);
const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        }
    ]
});
export default router;
