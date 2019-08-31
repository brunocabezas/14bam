import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sponsors: []
  },
  mutations: {
    loadSponsors (state, sponsors) {
      // mutate state
      state.sponsors = sponsors
    }
  }
})
