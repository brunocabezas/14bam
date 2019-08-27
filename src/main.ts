import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axiosClient from "../api/client";
import VueAxios from "vue-axios";
import VueRouter from 'vue-router'
import router from './router';

import "./main.styl";

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(VueAxios, axiosClient);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
