import Vue from 'vue'
import axios from 'axios'
import routes from './routes'
import { getProgramFromApi, getPrograms } from '../src/helpers/apiHelpers'
import { resolvedPromise } from '../src/helpers/promiseHelpers'

const BASE_URL = 'http://www.bienaldeartesmediales.cl/14/wp-json/wp/v2'

export const loadPages = () =>
  Vue.axios.get(routes.pages).then(response => {
    console.log('loadPages', response.data)
  })

export const loadPosts = () =>
  Vue.axios.get(routes.posts).then(response => {
    console.log('loadPosts', response.data)
  })

export const loadPost = (postId) =>
  Vue.axios.get(routes.post(postId)).then(response => {
    console.log('loadPost', postId, response.data)
  })

// Custom posts
export const loadVideos = () =>
  Vue.axios.get(routes.videos)

export const loadSponsors = () =>
  Vue.axios.get(routes.sponsors)

export const loadExpositions = () =>
  Vue.axios.get(routes.expositions)

export const loadExposition = (name) =>
  Vue.axios.get(routes.exposition(name))

export const loadParticipants = () =>
  Vue.axios.get(routes.participants)

export const loadParticipant = (name) =>
  Vue.axios.get(routes.participant(name))

export const loadPrograms = () =>
  Vue.axios.get(routes.generalPrograms)
    .then(res => resolvedPromise((getPrograms(res))))

export const loadProgram = (slug) =>
  Vue.axios.get(routes.generalProgram(slug))
    // Using api helpers to select data returning a promise
    .then(res => resolvedPromise((getProgramFromApi(res))))

export const loadEvent = (slug) =>
  Vue.axios.get(routes.program(slug))
    // Using api helpers to select data returning a promise
    .then(res => resolvedPromise((getProgramFromApi(res))))

export default axios.create({
  baseURL: BASE_URL
})
