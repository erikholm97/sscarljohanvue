import Vue from "vue";
import Router from "vue-router";
import Undersida from "./components/Undersida.vue";
Vue.use(Router);
const router = new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Undersida",
            component: Undersida
        }
    ]
});
export default router;
