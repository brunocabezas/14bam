import Vue from 'vue'
import axios from 'axios'
import routes from './routes'
import { resolvedPromise } from '../src/helpers/promiseHelpers'

const BASE_URL = 'http://www.bienaldeartesmediales.cl/14/wp-json/wp/v2'

// Not used
// export const loadPosts = () =>
//   Vue.axios.get(routes.posts).then(response => {
//     console.log('loadPosts', response.data)
//   })

// export const loadPost = postId =>
//   Vue.axios.get(routes.post(postId)).then(response => {
//     console.log('loadPost', postId, response.data)
//   })

// Custom posts
export const loadVideos = () => Vue.axios.get(routes.videos)

// export const loadExposition = name => Vue.axios.get(routes.exposition(name))

// directions is an array of strings representing valid addresses
export const loadMarkersData = (directions = []) => {
  let promiseArray = directions.map(address => {
    return Vue.axios.get(routes.markerData(address))
  })
  return axios.all(promiseArray).then(response => resolvedPromise(response))
}

export default axios.create({
  baseURL: BASE_URL
})
