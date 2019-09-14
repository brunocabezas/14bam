import { flatten, onlyUnique } from './arrayHelpers'
import {
  getTimeOfDateTimeString,
  getMonthOfDateTimeString,
  getDayOfDateTimeString,
  findCloseToToday,
  sortByDate
} from './dateHelpers'

//
// apiHelpers
// All helpers defined here handle API responses and
// This logic layer is ment to format the data as required
// and should be placed before is stored on vuex store

// Local Helpers
// Gets advanced custom fields values from results
const getAcfField = (results, fieldName, defaultValue = '') =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
const getWPTitle = object =>
  (object.title && object.title.rendered) || ''

export const getSponsorsFromApi = sponsors =>
  sponsors.map(sponsor => ({
    logo: sponsor.acf_fields && sponsor.acf_fields.logo,
    name: getWPTitle(sponsor)
  }))

export const getExpositionsFromApi = response =>
  response.data.map(expo => ({
    id: expo.id,
    wpId: expo.id,
    slug: expo.slug,
    place: getAcfField(expo, 'espacio'),
    hour: getAcfField(expo, 'horarios'),
    hour2: getAcfField(expo, 'horarios_2'),
    web: getAcfField(expo, 'web'),
    address: getAcfField(expo, 'direccion'),
    startDate: getAcfField(expo, 'fecha_inicio'),
    endDate: getAcfField(expo, 'fecha_termino'),
    description: getAcfField(expo, 'texto_curatorial'),
    artists: getAcfField(expo, 'artistas', []),
    curators: getAcfField(expo, 'curadores', []),
    name: getWPTitle(expo)
  }))

export const getExpositionFromApi = (apiResponse = []) =>
  Object.assign({}, {
    id: apiResponse[0].id,
    wpId: apiResponse[0].id,
    slug: apiResponse[0].slug,
    place: getAcfField(apiResponse[0], 'espacio'),
    hour: getAcfField(apiResponse[0], 'horarios'),
    hour2: getAcfField(apiResponse[0], 'horarios_2'),
    web: getAcfField(apiResponse[0], 'web'),
    address: getAcfField(apiResponse[0], 'direccion'),
    startDate: getAcfField(apiResponse[0], 'fecha_inicio'),
    endDate: getAcfField(apiResponse[0], 'fecha_termino'),
    description: getAcfField(apiResponse[0], 'texto_curatorial'),
    artists: getAcfField(apiResponse[0], 'artistas', []),
    curators: getAcfField(apiResponse[0], 'curadores', []),
    name: getWPTitle(apiResponse[0])
  })

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: getWPTitle(person),
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url,
    keywords: getAcfField(person, 'palabras_clave', []).map(keywords => keywords.name)
  }))

// Loops trough participantes, getting a list of unique keywords
export const getKeywordsFromParticipants = participants => {
  const nestedKeywords = participants
    .map(person => person.keywords.map(keyword => keyword))

  return flatten(nestedKeywords).filter(onlyUnique).map(key => ({
    name: key,
    id: key,
    participants: participants.filter(p => p.keywords.includes(key))
  }))
}
// Using first result of the respose
// This route returns an array, the response could include more posts
export const getParticipantFromApi = (apiResponse = []) =>
  Object.assign({}, {
    id: apiResponse[0].id,
    wpId: apiResponse[0].id,
    slug: apiResponse[0].slug,
    name: getWPTitle(apiResponse[0]),
    bio: getAcfField(apiResponse[0], 'bio'),
    workTitle: getAcfField(apiResponse[0], 'work_title'),
    workDescription: getAcfField(apiResponse[0], 'work_text'),
    img: getAcfField(apiResponse[0], 'fotos', [{ url: '' }])[0].url,
    // Filtering images with non valid url
    images: getAcfField(apiResponse[0], 'fotos', [{ url: '' }])
      .filter(img => img.url).map(img => img.url),
    expo: getAcfField(apiResponse[0], 'exposicion', [])[0] || {},
    // Related participants
    related: getAcfField(apiResponse[0], 'relacionados', [])
      .map(related => ({
        id: related.ID,
        name: related.post_title,
        slug: related.post_name
      })),
    // Arrays of Strings, keywords
    keywords: getAcfField(apiResponse[0], 'palabras_clave', [])
      .map(keyword => ({
        id: keyword.term_id,
        name: keyword.name,
        slug: keyword.slug
      }))
  })

// Main program is not included
export const getPrograms = ({ data }) => {
  return data.filter(program => true)
    .map(({ id, slug, ...others }) => ({
      id, slug, name: getWPTitle(others), events: getAcfField(others, 'programas', [])
    }))
}

export const getProgramFromApi = (apiResponse = []) => {
  // Getting the first program
  const firstProgram = apiResponse.data[0]
  return Object.assign({}, {
    id: firstProgram.id,
    slug: firstProgram.slug,
    name: getWPTitle(firstProgram),
    text: getAcfField(firstProgram, 'texto'),
    events: getAcfField(firstProgram, 'programas', [])
  })
}

export const getCalendarFromApi = (apiResponse = []) => {
  const events = apiResponse.data && apiResponse.data.items
  // Get closest to today's date 
  const closestToToday = events
    .map(event => new Date(event.start.dateTime))
    .reduce(findCloseToToday)

  const sortedEvents = events
    .sort(sortByDate)
    .map(event => ({
      id: event.id,
      name: event.summary,
      dateTime: new Date(event.start.dateTime),
      date: getDayOfDateTimeString(event.start.dateTime),
      month: getMonthOfDateTimeString(event.start.dateTime),
      time: getTimeOfDateTimeString(event.start.dateTime)
    }))

  // Find event with closest to today's date
  const closestOnSortedEvents = sortedEvents
    .find(event => event.dateTime &&
      event.dateTime.getTime() === closestToToday.getTime())

  // Based on the found item index, ten events are displayed on the calendar
  const spliceIndex = closestOnSortedEvents
    ? sortedEvents.indexOf(closestOnSortedEvents) : 0

  return sortedEvents.splice(spliceIndex, 10)
}
