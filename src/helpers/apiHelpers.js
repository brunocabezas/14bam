import { flatten, onlyUnique } from './arrayHelpers'
import {
  getTimeOfDateTimeString,
  getMonthOfDateTimeString,
  getDayOfDateTimeString,
  findCloseToToday,
  sortByDate,
  dateStringToDate,
  isValidDate
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
const getWPTitle = object => (object.title && object.title.rendered) || ''

export const getSponsorsFromApi = sponsors =>
  sponsors.map(sponsor => ({
    date: sponsor.date,
    author: sponsor.author,
    logo: getAcfField(sponsor, 'logo'),
    category: getAcfField(sponsor, 'category'),
    url: getAcfField(sponsor, 'url', null),
    name: getWPTitle(sponsor)
  }))

export const getExpositionsFromApi = data =>
  data.map(expo => ({
    id: expo.id,
    wpId: expo.id,
    slug: expo.slug,
    place: getAcfField(expo, 'espacio'),
    hour: getAcfField(expo, 'horarios'),
    hour2: getAcfField(expo, 'horarios_2'),
    web: getAcfField(expo, 'web'),
    webText: getAcfField(expo, 'web_label'),
    address: getAcfField(expo, 'direccion'),
    startDate: getAcfField(expo, 'fecha_inicio'),
    endDate: getAcfField(expo, 'fecha_termino'),
    description: getAcfField(expo, 'texto_curatorial'),
    artists: getAcfField(expo, 'artistas', []),
    curators: getAcfField(expo, 'curadores', []),
    name: getWPTitle(expo)
  }))

export const getExpositionFromApi = (data = []) => {
  if (!data[0]) {
    return undefined
  }

  return Object.assign(
    {},
    {
      id: data[0].id,
      wpId: data[0].id,
      slug: data[0].slug,
      place: getAcfField(data[0], 'espacio'),
      hour: getAcfField(data[0], 'horarios'),
      hour2: getAcfField(data[0], 'horarios_2'),
      web: getAcfField(data[0], 'web'),
      webText: getAcfField(data[0], 'web_label'),
      address: getAcfField(data[0], 'direccion'),
      startDate: getAcfField(data[0], 'fecha_inicio'),
      endDate: getAcfField(data[0], 'fecha_termino'),
      description: getAcfField(data[0], 'texto_curatorial'),
      artists: getAcfField(data[0], 'artistas', []),
      curators: getAcfField(data[0], 'curadores', []),
      name: getWPTitle(data[0])
    }
  )
}

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: getWPTitle(person),
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url,
    images: getAcfField(person, 'fotos', [{ url: '' }]),
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

// Main program is not included
export const getMainPrograms = data => {
  return data
    .filter(program => true)
    .map(({ id, slug, ...others }) => ({
      id,
      slug,
      shortDescription: getAcfField(others, 'abstract'),
      name: getWPTitle(others),
      events: getAcfField(others, 'programas', [])
    }))
}

export const getProgramFromApi = (apiResponse = []) => {
  // Getting the first program
  const firstProgram = apiResponse.data[0]
  return Object.assign(
    {},
    {
      id: firstProgram.id,
      slug: firstProgram.slug,
      name: getWPTitle(firstProgram),
      text: getAcfField(firstProgram, 'texto'),
      images: getAcfField(firstProgram, 'galeria', []),
      events: getAcfField(firstProgram, 'programas', [])
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

export const getActivitiesFromApi = activities => {
  const result = activities.map(act => {
    // date comes as '7 de noviembre'
    const dateString = getAcfField(act, 'date')
    return ({
      id: act.id,
      name: getWPTitle(act),
      slug: act.slug,
      description: getAcfField(act, 'description'),
      picture: getAcfField(act, 'image'),
      participants: getAcfField(act, 'participant'),
      limitedTickets: getAcfField(act, 'limited_tickets'),
      program: getAcfField(act, 'program'),
      place: getAcfField(act, 'place')[0],
      date: {
        jsDate: dateStringToDate(dateString),
        day: dateString.split(' ')[0],
        month: dateString.split('de ')[1],
        time: getAcfField(act, 'time'),
        dateString
      }
    })
  }).sort((a, b) => a.date.jsDate - b.date.jsDate)

  const closestToToday = result
    .map(act => act.date.jsDate)
    .filter(date => isValidDate(date))
    .reduce(findCloseToToday, result[0])

  // Find event with closest to today's date
  const closestOnSortedEvents = result.find(
    event =>
      event.date.jsDate && event.date.jsDate.getTime() === closestToToday.getTime()
  )

  // Based on the found item index, ten events are displayed on the calendar
  const spliceIndex = closestOnSortedEvents
    ? result.indexOf(closestOnSortedEvents)
    : 0

  return result.slice(spliceIndex)
}
