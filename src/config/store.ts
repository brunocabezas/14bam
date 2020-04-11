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
import { exposition, program } from './state/initialState'
import { GoogleMapMarker } from './types/googleMapsTypes'

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
  // Programs and sub-programs
  [DataType.MainPrograms]: asyncState(), // Main program contain programs
  [DataType.Program]: asyncState([program]), // Program contains activities
  [DataType.Events]: asyncState(),
  // Data fetched from google api to get lat,lon coordinates from an array of addresses
  markersData: [],
  // Wordpress data
  [DataType.Categories]: asyncState(),
  [DataType.Pages]: asyncState()
}

const mutations = {
  ...asyncDataMutations(DataType.Expositions),
  ...asyncDataMutations(DataType.Exposition),
  ...asyncDataMutations(DataType.Participants),
  ...asyncDataMutations(DataType.Participant),
  ...asyncDataMutations(DataType.MainPrograms),
  ...asyncDataMutations(DataType.Program),
  ...asyncDataMutations(DataType.Events),
  ...asyncDataMutations(DataType.Sponsors),
  ...asyncDataMutations(DataType.Categories),
  ...asyncDataMutations(DataType.Pages),
  loadMarkersData (state: State, data: GoogleMapMarker[]) {
    state.markersData = data
  }
}

const store = new Vuex.Store({
  state,
  // TODO add typed mutations: https://github.com/SimonZhangITer/vue-typescript-dpapp-demo/blob/master/src/store/mutations.ts
  mutations,
  actions: { ...actions },
  getters: { ...getters }
})

export default store
