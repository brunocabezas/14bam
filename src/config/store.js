import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: [],
    // Expositions
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
    keywords: [],
    // Programs and sub-programs
    programs: [],
    program: {
      id: -1,
      events: []
    },
    // An event is the same as a program but without events (programs)
    event: {
      id: -1
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
    },
    loadEvent (state, data) {
      state.event = data
    },
    loadKeywords (state, data) {
      state.keywords = data
    }
  }
})
