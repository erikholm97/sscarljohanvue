import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { firestorePlugin } from "vuefire";

require("dotenv").config();

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDgPAE_afsqOkLG5saarhNRMR_dornR468"
    }
});

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
