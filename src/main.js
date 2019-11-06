// Make sure to register before importing any components
// import './config/class-component-hooks'
import Vue from 'vue'
import Icon from '../node_modules/vue-awesome/components/Icon.vue'
import VueProgressiveImage from 'vue-progressive-image'
import axiosClient from '../api/client'
import VueAxios from 'vue-axios'
import router from '@/config/router'
import vClickOutside from 'v-click-outside'
import App from './App.vue'
import VueAnalytics from 'vue-ua'
import './registerServiceWorker'
import VueLazyLoad from 'vue-lazyload'
import store from '@/config/store'
import urls from '@/config/urls'
import VueMq from 'vue-mq'
import 'es6-promise/auto'
import '../node_modules/video.js/dist/video-js.css'
import './styles/main.styl'

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/brands/facebook'
import 'vue-awesome/icons/brands/instagram'
import 'vue-awesome/icons/brands/youtube'
import 'vue-awesome/icons/chevron-left'
import 'vue-awesome/icons/chevron-right'

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 768,
    lg: 1000
  }
})

Vue.use(VueLazyLoad)

Vue.use(vClickOutside)
Vue.use(VueProgressiveImage)
// globally (in your main .js file)
Vue.component('v-icon', Icon)

const trackingId = process.env.VUE_APP_GOOGLE_ANALYTICS || ''

if (trackingId && process.env.NODE_ENV === 'production') {
  console.log('setting up Google analytics')
  Vue.use(VueAnalytics, {
    // [Required] The name of your app as specified in Google Analytics.
    appName: '14 BAM',
    // [Required] The version of your app.
    appVersion: '0.7',
    // [Required] Your Google Analytics tracking ID.
    trackingId: process.env.VUE_APP_GOOGLE_ANALYTICS || '',
    // If you're using vue-router, pass the router instance here.
    vueRouter: router
  })
}
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
