import Vue from 'vue'
import axios from 'axios'
import routes from './routes'
import { resolvedPromise } from '../src/helpers/promiseHelpers'

const BASE_URL: string =
  process.env.VUE_APP_BASE_URL || 'http://localhost'

if (!process.env.VUE_APP_BASE_URL) {
  console.warn(`API base url is not defined, it will default to ${BASE_URL}`)
}
// Not used
// export const loadPosts = () =>
//   Vue.axios.get(routes.posts).then(response => {
//     console.log('loadPosts', response.data)
//   })

// export const loadPost = postId =>
//   Vue.axios.get(routes.post(postId)).then(response => {
//     console.log('loadPost', postId, response.data)
//   })

// Make requests to wordpress videos, which are not on vuex store
export const getVideos = () => Vue.axios.get(routes.videos)

// directions is an array of strings representing valid addresses
export const loadMarkersData = (directions: string[] = []) => {
  let promiseArray = directions.map(address => {
    return Vue.axios.get(routes.markerData(address))
  })
  return axios.all(promiseArray).then(response => resolvedPromise(response))
}

export default axios.create({
  baseURL: BASE_URL
})
