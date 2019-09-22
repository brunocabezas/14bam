import Vue from 'vue'
import getNestedValue from 'get-nested-value'
//
// remoteDataHelper
// provides helpers to create different aspects to store information about
// async data on vuex:
// - Initial state helper via state
// - Vuex async actions available through fetch
// - Vuex mutations through asyncDataMutations
// - Vuex message/mutations types thorugh getMsgs

// getMsgs
// SUCCESS => request has succeeded and data is submitted
// FAILURE => request has failed, only visible in the error code for now
// PENDING => loading indicator
const getMsgs = slug => ({
  BASE: slug,
  SUCCESS: `${slug}_SUCCESS`,
  FAILURE: `${slug}_FAILURE`,
  PENDING: `${slug}_PENDING`
})

// state
// initializes the corersponseding state node with information regarding asynchronous data
export const state = (data = []) => ({
  responseData: data, // data from the API response
  status: undefined, // status code
  loading: false // loading indicator
})

// isLoadingHelper
// provides a simple way to declare a getter to a loading action
// only stateNode parameter is required, it's a dot separated string
// used to access a specific state node; e.g. 'expositions.single.accessor'
// this requires that the stateNode follows the remoteData helper state shapes
export const isLoadingHelper = stateNode => state => {
  return stateNode && !!getNestedValue(stateNode, state).loading
}

// this requires that the stateNode follows the remoteData helper state shapes
export const isNotFetchedHelper = stateNode => state => {
  return (
    stateNode &&
    !stateNode.loading &&
    getNestedValue(stateNode, state).status === undefined
  )
}

// mutations
export const asyncDataMutations = slug => {
  const types = getMsgs(slug)
  const getState = state => state[slug.toLowerCase()]
  return {
    [types.BASE]: (state, payload) => {
      const stateNode = getState(state)
      switch (payload.type) {
        case types.PENDING:
          return Vue.set(stateNode, 'loading', payload.value)
        case types.SUCCESS:
          // When request succeeds, set loading and status
          Vue.set(stateNode, 'status', payload.statusCode)
          return Vue.set(stateNode, 'responseData', payload.data)
        case types.FAILURE:
          return Vue.set(stateNode, 'status', payload.statusCode)
      }
    }
  }
}

// action
export const fetch = ({ url, slug }) => {
  // Getting mutationTypes
  const mutationTypes = getMsgs(slug)
  return store => {
    // Send the pending flag. Useful for showing a spinner,
    store.commit(mutationTypes.BASE, {
      type: mutationTypes.PENDING,
      value: true
    })
    // Make request
    Vue.axios(url, {})
      .then(response => {
        let data = response.data
        // commit the response and status code to the store
        store.commit(mutationTypes.BASE, {
          type: mutationTypes.SUCCESS,
          data,
          statusCode: response.status
        })

        // also sent pending to false, since the call is complete.
        store.commit(mutationTypes.BASE, {
          type: mutationTypes.PENDING,
          value: false
        })
        return data
      })
      .catch(error => {
        // there was an error. Commit the status code to the store.
        // we will write the mutation logic soon.
        store.commit(mutationTypes.BASE, {
          type: mutationTypes.FAILURE,
          statusCode: error.response ? error.response.status : undefined
        })
        // since the call is complete, sent pending to false.
        store.commit(mutationTypes.BASE, {
          type: mutationTypes.PENDING,
          value: false
        })
      })
  }
}
