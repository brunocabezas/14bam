import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: [],
    expositions: [],
    exposition: {}
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
    }
  }
})
