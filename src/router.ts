import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue';
import Places from '@/components/Places/Places.vue';
import Programs from '@/components/Programs/Programs.vue';
import paths from '@/urls';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: paths.home,
      name: 'home',
      component: App
    },
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
  ]
})