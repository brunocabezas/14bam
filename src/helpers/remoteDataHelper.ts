import Vue from 'vue'
import { ActionContext } from 'vuex'
import getNestedValue from 'get-nested-value'
import { State } from '@/config/types/types'
import { AsyncData, AsyncPayload } from '@/config/types/asyncDataTypes'
import { DataType } from '@/config/mutationTypes'
// remoteDataHelper
// provides helpers to create different aspects to store information about
// async data on vuex:
// - Initial state helper via state
// - Vuex async actions available through fetch
// - Vuex mutations through asyncDataMutations
// - Vuex message/mutations types thorugh getMutationMessages
const INITIAL_STATUS_CODE = undefined
// Attributes of async data state
const DATA_FIELD_NAME = 'responseData'
const STATUS_FIELD_NAME = 'status'
const LOADING_FIELD_NAME = 'loading'

// Types
interface FetchParams {
  url: string
  slug: DataType
}

interface MutationMessages {
  BASE: string
  SUCCESS: string
  FAILURE: string
  PENDING: string
}
// getMutationMessages
// SUCCESS => request has succeeded and data is submitted
// FAILURE => request has failed, only visible in the error code for now
// PENDING => loading indicator
const getMutationMessages = (slug: DataType): MutationMessages => ({
  BASE: slug,
  SUCCESS: `${slug}_SUCCESS`,
  FAILURE: `${slug}_FAILURE`,
  PENDING: `${slug}_PENDING`
})

// state
// initializes the corersponseding state node with information regarding asynchronous data
// the state node must be the same as the slug, but lowercased; using low dashes is recommended
// for exampe, if the using the slug DATA_TYPE, the state param should be data_type
export const state = (data: any = []): AsyncData => ({
  [DATA_FIELD_NAME]: data, // data from the API response
  [STATUS_FIELD_NAME]: INITIAL_STATUS_CODE, // status code
  [LOADING_FIELD_NAME]: false // loading indicator
})

// isLoadingHelper
// provides a simple way to declare a getter to a loading action
// only stateNode parameter is required, it's a dot separated string
// used to access a specific state node; e.g. 'expositions.single.accessor'
// this requires that the stateNode follows the remoteData helper state shapes
export const isLoadingHelper = (stateNode: DataType) => (
  state: State
): boolean => {
  return (
    (stateNode && !!getNestedValue(stateNode, state)[LOADING_FIELD_NAME]) ||
    false
  )
}

// this requires that the stateNode follows the remoteData helper state shapes
export const isNotFetchedHelper = (stateNode: DataType) => (
  state: State
): boolean => {
  return (
    (stateNode &&
      !getNestedValue(stateNode, state)[LOADING_FIELD_NAME] &&
      getNestedValue(stateNode, state)[STATUS_FIELD_NAME] ===
        INITIAL_STATUS_CODE) ||
    false
  )
}

// generates mutations to handle async data based on a slug
export const asyncDataMutations = (slug: DataType) => {
  const mutations: MutationMessages = getMutationMessages(slug)
  // State parameter must be the same as the slug, but lowercase
  // using low dashes is recommended
  const getState = (state: State) => state[slug]
  return {
    [mutations.BASE]: (state: State, payload: AsyncPayload) => {
      const stateNode = getState(state)
      switch (payload.type) {
        case mutations.PENDING:
          return Vue.set(stateNode, LOADING_FIELD_NAME, payload.value)
        case mutations.SUCCESS:
          // When request succeeds, set loading and status
          Vue.set(stateNode, STATUS_FIELD_NAME, payload.statusCode)
          return Vue.set(stateNode, DATA_FIELD_NAME, payload.data)
        case mutations.FAILURE:
          return Vue.set(stateNode, STATUS_FIELD_NAME, payload.statusCode)
      }
    }
  }
}

export const fetch = (
  { commit }: ActionContext<State, any>,
  params: FetchParams
) => {
  const { url, slug } = params
  // Getting mutationTypes
  const mutations = getMutationMessages(slug)
  // Send the pending flag. Useful for showing a spinner,
  commit(mutations.BASE, {
    type: mutations.PENDING,
    value: true
  })
  // Make request
  Vue.axios(url, {})
    .then(response => {
      let data = response.data
      // commit the response and status code to the store
      commit(mutations.BASE, {
        type: mutations.SUCCESS,
        data,
        statusCode: response.status
      })

      // also sent pending to false, since the call is complete.
      commit(mutations.BASE, {
        type: mutations.PENDING,
        value: false
      })
      return data
    })
    .catch(error => {
      // there was an error. Commit the status code to the
      // we will write the mutation logic soon.
      commit(mutations.BASE, {
        type: mutations.FAILURE,
        statusCode: error.response ? error.response.status : undefined
      })
      // since the call is complete, sent pending to false.
      commit(mutations.BASE, {
        type: mutations.PENDING,
        value: false
      })
    })
}
