import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: [],
    expositions: [],
    exposition: {
      id: -1,
      curators: [],
      artists: []
    },
    // Artits and curators
    participants: [],
    participant: {
      id: -1,
      expo: {},
      images: []
    },
    // Artits and curators
    programs: [],
    program: {
      id: -1,
      events: []
    }
  },
  mutations: {
    loadSponsors (state, data) {
      // mutate state
      state.sponsors = data
    },
    loadExpositions (state, data) {
      state.expositions = data
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
    loadPrograms (state, data) {
      state.programs = data
    },
    loadProgram (state, data) {
      state.program = data
    }
  }
})
