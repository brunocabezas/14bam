import Vue from 'vue'
import Router from 'vue-router'
import paths from '@/config/urls'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: paths.home,
    //   name: 'home',
    //   component: () => import(Home)
    // },
    {
      path: paths.home,
      name: 'home',
      component: () => import('@/components/FutureHome/FutureHome.vue')
    },
    // Static content pages
    {
      path: paths.about,
      publicPath: '/',
      name: 'about',
      component: () => import('@/components/StaticPages/About.vue')
    },
    {
      path: paths.contest,
      publicPath: '/',
      name: 'contest',
      component: () => import('@/components/StaticPages/Contest.vue')
    },
    {
      path: paths.abstract,
      publicPath: '/',
      name: 'abstract',
      component: () => import('@/components/StaticPages/Abstract.vue')
    },
    // Expositions
    {
      path: paths.expositions,
      publicPath: '/',
      name: 'expositions',
      component: () => import('@/components/Expositions/Expositions.vue')
    },
    {
      path: paths.exposition(':slug'),
      publicPath: '/',
      name: 'exposition',
      component: () => import('@/components/Expositions/Exposition/Exposition.vue')
    },
    // Participants
    {
      path: paths.participants,
      publicPath: '/',
      name: 'participants',
      component: () => import('@/components/Participants/Participants.vue')
    },
    {
      path: paths.participant(':slug'),
      publicPath: '/',
      name: 'participant',
      component: () => import('@/components/Participants/Participant/Participant.vue')
    },
    {
      path: paths.keyword(':slug'),
      publicPath: '/',
      name: 'keyword',
      component: () => import('@/components/Keywords/Keyword.vue')
    },
    // Programs
    // Following routes both use Program, which based on
    // programType property will display things accordingly
    {
      path: paths.program(':slug'),
      publicPath: '/',
      name: 'program',
      component: () => import('@/components/Programs/Program/Program.vue')
    },
    {
      path: paths.mainProgram(':slug'),
      publicPath: '/',
      name: 'mainProgram',
      component: () => import('@/components/Programs/MainProgram/MainProgram.vue')
    },
    {
      path: paths.event(':slug'),
      publicPath: '/',
      name: 'event',
      component: () => import('@/components/Programs/Event/Event.vue')
    }
  ]
})
