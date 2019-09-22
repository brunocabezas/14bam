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
    sponsors: [],
    calendar: [],
    // Expositions
    expositions: asyncState(),
    exposition: {
      id: -1,
      curators: [],
      artists: []
    },
    // Artits and curators
    participants: asyncState(),
    participant: {
      id: -1,
      expo: {},
      images: []
    },
    keywords: [],
    // Programs and sub-programs
    programs: asyncState(),
    program: {
      id: -1,
      events: [],
      images: []
    },
    // An event is the same as a program but without events (programs)
    event: {
      id: -1
    },
    // Data fetched from google api to get lat,lon coordinates from an array of addresses
    markersData: []
  },
  mutations: {
    ...asyncDataMutations(mutationTypes.expositions),
    ...asyncDataMutations(mutationTypes.participants),
    ...asyncDataMutations(mutationTypes.programs),
    loadSponsors (state, data) {
      // mutate state
      state.sponsors = data
    },
    loadExposition (state, data) {
      state.exposition = data
    },
    loadParticipants (state, data) {
      state.participants = data
    },
    loadParticipant (state, data) {
      state.participant = data
    },
    loadMainPrograms (state, data) {
      state.programs = data
    },
    loadProgram (state, data) {
      state.program = data
    },
    loadEvent (state, data) {
      state.event = data
    },
    loadKeywords (state, data) {
      state.keywords = data
    },
    loadCalendar (state, data) {
      state.calendar = data
    },
    loadMarkersData (state, data) {
      state.markersData = data
    }
  },
  actions: { ...actions },
  getters: { ...getters }
})
