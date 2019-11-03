import Vue from 'vue'
import Router from 'vue-router'
import FutureHome from '@/components/FutureHome/FutureHome.vue'
import Home from '@/components/Home/Home.vue'
import Participants from '@/components/Participants/Participants.vue'
import Participant from '@/components/Participants/Participant/Participant.vue'
import Expositions from '@/components/Expositions/Expositions.vue'
import Exposition from '@/components/Expositions/Exposition/Exposition.vue'
import Programs from '@/components/Programs/Programs.vue'
import Keyword from '@/components/Keywords/Keyword.vue'
import Program from '@/components/Programs/Program/Program.vue'
import Contest from '@/components/StaticPages/Contest.vue'
import About from '@/components/StaticPages/About.vue'
import Abstract from '@/components/StaticPages/Abstract.vue'
import paths from '@/config/urls'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: paths.home,
      publicPath: '/',
      name: 'home',
      component: Home
    },
    {
      path: paths.futureHome,
      publicPath: '/',
      name: 'futureHome',
      component: FutureHome
    },
    // Static content pages
    {
      path: paths.about,
      publicPath: '/',
      name: 'about',
      component: About
    },
    {
      path: paths.contest,
      publicPath: '/',
      name: 'contest',
      component: Contest
    },
    {
      path: paths.abstract,
      publicPath: '/',
      name: 'abstract',
      component: Abstract
    },
    // Expositions
    {
      path: paths.expositions,
      publicPath: '/',
      name: 'expositions',
      component: Expositions
    },
    {
      path: paths.exposition(':slug'),
      publicPath: '/',
      name: 'exposition',
      component: Exposition
    },
    // Participants
    {
      path: paths.participants,
      publicPath: '/',
      name: 'participants',
      component: Participants
    },
    {
      path: paths.participant(':slug'),
      publicPath: '/',
      name: 'participant',
      component: Participant
    },
    {
      path: paths.keyword(':slug'),
      publicPath: '/',
      name: 'keyword',
      component: Keyword
    },
    // Programs
    {
      path: paths.programs,
      publicPath: '/',
      name: 'programs',
      component: Programs
    },
    // Following routes both use Program, which based on
    // programType property will display things accordingly
    {
      path: paths.program(':slug'),
      publicPath: '/',
      name: 'program',
      component: Program,
      props: {
        programType: 'program'
      }
    },
    {
      path: paths.event(':slug'),
      publicPath: '/',
      name: 'event',
      component: Program,
      props: {
        programType: 'event'
      }
    }
  ]
})
