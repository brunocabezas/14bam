import Vue from 'vue'
import Router from 'vue-router'
import FutureHome from '@/components/FutureHome/FutureHome.vue'
import Home from '@/components/Home/Home.vue'
import Participants from '@/components/Participants/Participants.vue'
import Participant from '@/components/Participants/Participant/Participant.vue'
import Expositions from '@/components/Expositions/Expositions.vue'
import Exposition from '@/components/Expositions/Exposition/Exposition.vue'
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
    {
      path: paths.exposition(':slug'),
      name: 'exposition',
      component: Exposition
    },
    {
      path: paths.participants,
      name: 'participants',
      component: Participants
    },
    {
      path: paths.participant(':slug'),
      name: 'participant',
      component: Participant
    },
    {
      path: paths.home,
      name: 'home',
      component: Home
    },
    // Not used for now
    {
      path: paths.programs,
      name: 'programs',
      component: Programs
    }
  ]
})
