import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import HittaHit from "./components/HittaHit.vue";
import Dikter from "./components/PoemCRUD/Dikter.vue";
import LoggaIn from "./components/LoggaIn.vue";
import AddPoem from "./components/PoemCRUD/AddPoem";
import ViewPoem from "./components/PoemCRUD/ViewPoem";
import EditPoem from "./components/PoemCRUD/EditPoem";
import Kontakt from "./components/Kontakt.vue";

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
        },
        {
            path: "/Kontakt",
            name: "Kontakt",
            component: Kontakt
        },
        {
            path: "/LoggaIn",
            name: "LoggaIn",
            component: LoggaIn
        },
        {
            path: "/AddPoem",
            name: "AddPoem",
            component: AddPoem
        },
        {
            path: "/ViewPoem",
            name: "ViewPoem",
            component: ViewPoem
        },
        {
            path: "/:Rubrik",
            name: "view-poem",
            component: ViewPoem
        },
        {
            path: "/edit/:Rubrik",
            name: "edit-poem",
            component: EditPoem
        }
    ]
});
export default router;
