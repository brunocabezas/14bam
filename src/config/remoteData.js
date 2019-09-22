import Vue from 'vue'
// import axios from 'axios'

const getMsgs = slug => ({
  BASE: slug,
  SUCCESS: `${slug}_SUCCESS`,
  FAILURE: `${slug}_FAILURE`,
  PENDING: `${slug}_PENDING`
})

// state
export const state = (data = []) => ({
  responseData: data,
  status: undefined,
  loading: false
})

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
  const mutationTypes = getMsgs(slug)
  return store => {
    // Send the pending flag. Useful for showing a spinner,
    store.commit(mutationTypes.BASE, {
      type: mutationTypes.PENDING,
      value: true
    })
    // make the ajax call.
    Vue.axios(url, {})
      .then(response => {
        let data = response.data

        // the call was successful!
        // commit the response and status code to the store.
        // we will write the actual mutation logic next.
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
