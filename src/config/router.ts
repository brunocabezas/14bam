import Vue from "vue"
import Router from "vue-router"
import TemporaryHome from "@/components/Home/TemporaryHome.vue";
import Home from "@/components/Home/Home.vue";
import Places from "@/components/Places/Places.vue";
import Programs from "@/components/Programs/Programs.vue";
import paths from "@/config/urls";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: paths.home,
      name: "home",
      component: Home,
    },
    {
      path: paths.temporaryHome,
      name: "temporaryHome",
      component: TemporaryHome,
    },
    // Not used for now
    {
      path: paths.places,
      name: "places",
      component: Places
    },
    {
      path: paths.programs,
      name: "programs",
      component: Programs
    },
  ]
})