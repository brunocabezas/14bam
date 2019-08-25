import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axiosClient from "../api/client";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

Vue.use(VueAxios, axiosClient);

new Vue({
  render: h => h(App)
}).$mount("#app");
