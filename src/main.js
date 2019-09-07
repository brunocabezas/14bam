// Make sure to register before importing any components
// import './config/class-component-hooks'
import Vue from 'vue'
import Icon from '../node_modules/vue-awesome/components/Icon.vue'
import axiosClient from '../api/client'
import VueAxios from 'vue-axios'
import router from '@/config/router'
import App from './App.vue'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/brands/facebook'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/chevron-left'
import 'vue-awesome/icons/chevron-right'
import './registerServiceWorker'
import store from '@/config/store'
import urls from '@/config/urls'
import 'es6-promise/auto'
// globally (in your main .js file)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false
Vue.use(VueAxios, axiosClient)
// eslint-disable-next-line no-new
new Vue({
  store: store.state,
  data () {
    return {
      urls
    }
  },
  el: '#app',
  render: h => h(App),
  router
})
