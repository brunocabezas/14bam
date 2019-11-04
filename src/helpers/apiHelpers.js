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
export const getAcfField = (results, fieldName, defaultValue = '') =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
export const getWPTitle = object => (object.title && object.title.rendered) || ''

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: getWPTitle(person),
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url,
    images: getAcfField(person, 'fotos', []),
    keywords: getAcfField(person, 'palabras_clave', []).map(
      keywords => keywords.name
    )
  }))

// Loops trough participantes, getting a list of unique keywords
export const getKeywordsFromParticipants = participants => {
  const nestedKeywords = participants.map(person =>
    person.keywords.map(keyword => keyword)
  )

  return flatten(nestedKeywords)
    .filter(onlyUnique)
    .map(key => ({
      name: key,
      id: key,
      participants: participants.filter(p => p.keywords.includes(key))
    }))
}
// Using first result of the respose
// This route returns an array, the response could include more posts
export const getParticipantFromApi = data => {
  return Object.assign(
    {},
    {
      id: data[0].id,
      wpId: data[0].id,
      slug: data[0].slug,
      name: getWPTitle(data[0]),
      bio: getAcfField(data[0], 'bio'),
      workTitle: getAcfField(data[0], 'work_title'),
      workDescription: getAcfField(data[0], 'work_text'),
      img: getAcfField(data[0], 'fotos', [{ url: '' }])[0].url,
      // Filtering images with non valid url
      images: getAcfField(data[0], 'fotos', [{ url: '' }])
        .filter(img => img.url)
        .map(img => img.url),
      expo: getAcfField(data[0], 'exposicion', [])[0] || {},
      // Related participants
      related: getAcfField(data[0], 'relacionados', []).map(related => ({
        id: related.ID,
        name: related.post_title,
        slug: related.post_name
      })),
      // Arrays of Strings, keywords
      keywords: getAcfField(data[0], 'palabras_clave', []).map(keyword => ({
        id: keyword.term_id,
        name: keyword.name,
        slug: keyword.slug
      }))
    }
  )
}

export const getCategoriesFromApi = data => {
  return data.map(category => ({
    id: category.id,
    name: category.name
      .split('-')[category.name.split('-').length - 1].replace(/\s+/g, '')
  }))
}

export const getCalendarFromApi = (apiResponse = []) => {
  const events = apiResponse.data && apiResponse.data.items
  // Get closest to today's date

  const closestToToday = events
    .map(event => new Date(event.start.dateTime))
    .reduce(findCloseToToday)

  const sortedEvents = events.sort(sortByDate).map(event => ({
    id: event.id,
    name: event.summary,
    dateTime: new Date(event.start.dateTime),
    date: getDayOfDateTimeString(event.start.dateTime),
    month: getMonthOfDateTimeString(event.start.dateTime),
    time: getTimeOfDateTimeString(event.start.dateTime)
  }))

  // Find event with closest to today's date
  const closestOnSortedEvents = sortedEvents.find(
    event =>
      event.dateTime && event.dateTime.getTime() === closestToToday.getTime()
  )

  // Based on the found item index, ten events are displayed on the calendar
  const spliceIndex = closestOnSortedEvents
    ? sortedEvents.indexOf(closestOnSortedEvents)
    : 0

  return sortedEvents.splice(spliceIndex, 10)
}
