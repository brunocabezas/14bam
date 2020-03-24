import { fetch as fetchData } from '../helpers/remoteDataHelper'
import TYPES from './mutationTypes'
import routes from '../../api/routes'
import { State, Participant, Program, Exposition, Store } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<State, any> = {
  loadExpositions: (store) => fetchData(store, {
    url: routes.expositions,
    slug: TYPES.EXPOSITIONS
  }),
  loadExposition: (store, expo: Exposition) =>
    fetchData(store, {
      url: routes.exposition(expo.slug),
      slug: TYPES.EXPOSITION
    }),
  loadParticipants: (store) => fetchData(store, {
    url: routes.participants,
    slug: TYPES.PARTICIPANTS
  }),
  loadParticipant: (store, participant: Participant) =>
    fetchData(store, {
      url: routes.participant(participant.slug),
      slug: TYPES.PARTICIPANT
    }),
  loadMainPrograms: (store) => fetchData(store, {
    url: routes.mainPrograms,
    slug: TYPES.MAIN_PROGRAMS
  }),
  loadProgram: (store: any, program: Program) =>
    fetchData(store, {
      url: routes.program(program.slug),
      slug: TYPES.PROGRAM
      // payload: program
    }),
  loadSponsors: (store) => fetchData(store, {
    url: routes.sponsors,
    slug: TYPES.SPONSORS
  }),
  loadActivities: (store) => fetchData(store, {
    url: routes.programActivities,
    slug: TYPES.ACTIVITIES
  }),
  loadWpCategories: (store) => fetchData(store, {
    url: routes.categories,
    slug: TYPES.CATEGORIES
  }),
  loadWpPages: (store) => fetchData(store, {
    url: routes.pages,
    slug: TYPES.PAGES
  })
}

export default actions
