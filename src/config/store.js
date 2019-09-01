import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: [],
    expositions: [],
    // Artits and curators
    participants: [],
    participant: {
      id: -1,
      expo: {}
    },
    exposition: {
      id: -1,
      curators: [],
      artists: []
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
    }
  }
})
