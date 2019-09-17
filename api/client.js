import Vue from 'vue'
import axios from 'axios'
import routes from './routes'
import {
  getProgramFromApi,
  getPrograms,
  getExpositionsFromApi,
  getCalendarFromApi,
  getParticipantsFromApi
} from '../src/helpers/apiHelpers'
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

export const loadPost = postId =>
  Vue.axios.get(routes.post(postId)).then(response => {
    console.log('loadPost', postId, response.data)
  })

// Custom posts
export const loadVideos = () => Vue.axios.get(routes.videos)

export const loadSponsors = () => Vue.axios.get(routes.sponsors)

export const loadExpositions = () =>
  Vue.axios
    .get(routes.expositions)
    // Using api helpers to select data returning a promise
    .then(res => resolvedPromise(getExpositionsFromApi(res)))

export const loadExposition = name => Vue.axios.get(routes.exposition(name))

export const loadParticipants = () =>
  Vue.axios
    .get(routes.participants)
    // Using api helpers to select data returning a promise
    .then(res => resolvedPromise(getParticipantsFromApi(res.data)))

export const loadParticipant = name => Vue.axios.get(routes.participant(name))

export const loadPrograms = () =>
  Vue.axios
    .get(routes.generalPrograms)
    .then(res => resolvedPromise(getPrograms(res)))

export const loadProgram = slug =>
  Vue.axios
    .get(routes.generalProgram(slug))
    .then(res => resolvedPromise(getProgramFromApi(res)))

export const loadEvent = slug =>
  Vue.axios
    .get(routes.program(slug))
    .then(res => resolvedPromise(getProgramFromApi(res)))

export const loadCalendar = () =>
  Vue.axios
    .get(routes.calendar)
    .then(res => resolvedPromise(getCalendarFromApi(res)))

export const loadProgramCalendar = (googleCalendarId = '') =>
  Vue.axios
    .get(routes.programCalendar(googleCalendarId))
    .then(res => resolvedPromise(res))

export const loadMarkersData = (directions = []) => {
  let promiseArray = directions.map(address => {
    return Vue.axios.get(routes.markerData(address))
  })
  return axios.all(promiseArray).then(response => resolvedPromise(response))
}

export default axios.create({
  baseURL: BASE_URL
})
