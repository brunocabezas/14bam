import Vue from 'vue'
import Vuex from 'vuex'
import {
  state as asyncState,
  asyncDataMutations
} from '@/helpers/remoteDataHelper'
import actions from './actions'
import getters from './getters'
import mutationTypes from './baseMutationTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: asyncState(),
    // Expositions
    expositions: asyncState(),
    exposition: asyncState([{ mainImg: { url: '', sizes: { medium: '' } }, images: [], artists: [] }]),
    // Artits and curators
    participants: asyncState(),
    participant: asyncState([{}]),
    keywords: [],
    // Programs and sub-programs
    main_programs: asyncState(),
    program: asyncState([{
      id: -1,
      events: [],
      images: []
    }]),
    activities: asyncState(),
    // An event is the same as a program but without events (programs)
    event: {
      id: -1
    },
    // Data fetched from google api to get lat,lon coordinates from an array of addresses
    markersData: [],
    // Wordpress data
    categories: asyncState(),
    pages: asyncState()
  },
  mutations: {
    ...asyncDataMutations(mutationTypes.activities),
    ...asyncDataMutations(mutationTypes.expositions),
    ...asyncDataMutations(mutationTypes.exposition),
    ...asyncDataMutations(mutationTypes.participants),
    ...asyncDataMutations(mutationTypes.participant),
    ...asyncDataMutations(mutationTypes.mainPrograms),
    ...asyncDataMutations(mutationTypes.program),
    ...asyncDataMutations(mutationTypes.sponsors),
    ...asyncDataMutations(mutationTypes.categories),
    ...asyncDataMutations(mutationTypes.pages),
    // loadParticipant (state, data) {
    //   state.participant = data
    // },
    // loadProgram (state, data) {
    //   state.program = data
    // },
    // loadEvent (state, data) {
    //   state.event = data
    // },
    loadKeywords (state, data) {
      state.keywords = data
    },
    loadMarkersData (state, data) {
      state.markersData = data
    }
  },
  actions: { ...actions },
  getters: { ...getters }
})
