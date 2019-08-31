import Vue from 'vue'
import Router from 'vue-router'
import FutureHome from '@/components/FutureHome/FutureHome.vue'
import Home from '@/components/Home/Home.vue'
import Places from '@/components/Places/Places.vue'
import Expositions from '@/components/Expositions/Expositions.vue'
import Programs from '@/components/Programs/Programs.vue'
import paths from '@/config/urls'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: paths.futureHome,
      name: 'futureHome',
      component: FutureHome
    },
    {
      path: paths.expositions,
      name: 'expositions',
      component: Expositions
    },
    // Not used for now
    {
      path: paths.places,
      name: 'places',
      component: Places
    },
    {
      path: paths.programs,
      name: 'programs',
      component: Programs
    },
    {
      path: paths.home,
      name: 'home',
      component: Home
    },
  ]
})
