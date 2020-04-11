import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import paths from '@/config/urls'

Vue.use(Router)

export const HOME_URL_NAME = 'home'

const routes: RouteConfig[] = [
  {
    path: paths.home,
    name: HOME_URL_NAME,
    component: () => import('@/components/Home/Home.vue')
  },
  // Static content pages
  {
    path: paths.about,
    name: 'about',
    component: () => import('@/components/StaticPages/About.vue')
  },
  {
    path: paths.contest,
    name: 'contest',
    component: () => import('@/components/StaticPages/Contest.vue')
  },
  {
    path: paths.abstract,
    name: 'abstract',
    component: () => import('@/components/StaticPages/Abstract.vue')
  },
  // Expositions
  {
    path: paths.expositions,
    name: 'expositions',
    component: () => import('@/components/Expositions/Expositions.vue')
  },
  {
    path: paths.exposition(':slug'),
    name: 'exposition',
    component: () =>
      import('@/components/Expositions/Exposition/Exposition.vue')
  },
  // Participants
  {
    path: paths.participants,
    name: 'participants',
    component: () => import('@/components/Participants/Participants.vue')
  },
  {
    path: paths.participant(':slug'),
    name: 'participant',
    component: () =>
      import('@/components/Participants/Participant/Participant.vue')
  },
  {
    path: paths.keyword(':slug'),
    name: 'keyword',
    component: () => import('@/components/Keywords/Keyword.vue')
  },
  // Programs
  // Following routes both use Program, which based on
  // programType property will display things accordingly
  {
    path: paths.program(':slug'),
    name: 'program',
    component: () => import('@/components/Programs/Program/Program.vue')
  },
  {
    path: paths.mainProgram(':slug'),
    name: 'mainProgram',
    component: () =>
      import('@/components/Programs/MainProgram/MainProgram.vue')
  },
  {
    path: paths.event(':slug'),
    name: 'event',
    component: () => import('@/components/Programs/Event/Event.vue')
  }
]

const router : Router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
