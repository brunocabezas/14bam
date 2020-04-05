import Vue from 'vue'
import Vuex from 'vuex'
import {
  state as asyncState,
  asyncDataMutations
} from '@/helpers/remoteDataHelper'
import actions from './actions'
import getters from './getters'
import { DataType } from './mutationTypes'
import { State } from './types/types'
import { exposition, program } from './initialState'

Vue.use(Vuex)

let state: State = {
  [DataType.Sponsors]: asyncState(),
  // sponsors: asyncState(),
  // Expositions
  [DataType.Expositions]: asyncState(),
  [DataType.Exposition]: asyncState([exposition]),
  // Artits and curators
  [DataType.Participants]: asyncState(),
  [DataType.Participant]: asyncState([{}]),
  keywords: [],
  // Programs and sub-programs
  [DataType.MainPrograms]: asyncState(),
  [DataType.Program]: asyncState([program]),
  [DataType.Activities]: asyncState(),
  // Data fetched from google api to get lat,lon coordinates from an array of addresses
  markersData: [],
  // Wordpress data
  [DataType.Categories]: asyncState(),
  [DataType.Pages]: asyncState()
}

const mutations = {
  ...asyncDataMutations(DataType.Activities),
  ...asyncDataMutations(DataType.Expositions),
  ...asyncDataMutations(DataType.Exposition),
  ...asyncDataMutations(DataType.Participants),
  ...asyncDataMutations(DataType.Participant),
  ...asyncDataMutations(DataType.MainPrograms),
  ...asyncDataMutations(DataType.Program),
  ...asyncDataMutations(DataType.Sponsors),
  ...asyncDataMutations(DataType.Categories),
  ...asyncDataMutations(DataType.Pages),
  loadKeywords (state: State, data: []) {
    state.keywords = data
  },
  loadMarkersData (state: State, data: []) {
    state.markersData = data
  }
}

const store = new Vuex.Store({
  state,
  // TODO add mutations: https://github.com/SimonZhangITer/vue-typescript-dpapp-demo/blob/master/src/store/mutations.ts
  mutations,
  actions: { ...actions },
  getters: { ...getters }
})

export default store
