import Vue from 'vue'
import Vuex from 'vuex'
import {
  state as asyncState,
  asyncDataMutations
} from '@/helpers/remoteDataHelper'
import actions from './actions'
import getters from './getters'
import types from './mutationTypes'
import { State, Program } from './types/types'
import { exposition, program } from './initialState'

Vue.use(Vuex)

let state: State = {
  sponsors: asyncState(),
  // Expositions
  expositions: asyncState(),
  exposition: asyncState([exposition]),
  // Artits and curators
  participants: asyncState(),
  participant: asyncState([{}]),
  keywords: [],
  // Programs and sub-programs
  main_programs: asyncState(),
  program: asyncState([program]),
  activities: asyncState(),
  // Data fetched from google api to get lat,lon coordinates from an array of addresses
  markersData: [],
  // Wordpress data
  categories: asyncState(),
  pages: asyncState()
}

const store = new Vuex.Store({
  state,
  // TODO add mutations: https://github.com/SimonZhangITer/vue-typescript-dpapp-demo/blob/master/src/store/mutations.ts
  mutations: {
    ...asyncDataMutations(types.ACTIVITIES),
    ...asyncDataMutations(types.EXPOSITIONS),
    ...asyncDataMutations(types.EXPOSITION),
    ...asyncDataMutations(types.PARTICIPANTS),
    ...asyncDataMutations(types.PARTICIPANTS),
    ...asyncDataMutations(types.MAIN_PROGRAMS),
    ...asyncDataMutations(types.PROGRAM),
    ...asyncDataMutations(types.SPONSORS),
    ...asyncDataMutations(types.CATEGORIES),
    ...asyncDataMutations(types.PAGES),
    loadKeywords (state: State, data: []) {
      state.keywords = data
    },
    loadMarkersData (state: State, data: []) {
      state.markersData = data
    }
  },
  actions: { ...actions },
  getters: { ...getters }
})

export default store
