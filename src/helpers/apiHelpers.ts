import { flatten, onlyUnique } from './arrayHelpers'
import { Participants, SingleParticipant, Categories } from '@/config/types/types'
import { WPRoot, WPKeyword, WpImage, WPResponse, WPPost, WPCategories, WPCategory } from '@/config/types/wordpressTypes'

//
// apiHelpers
// All helpers defined here handle API responses and

// This logic layer is ment to format the data as required
// and should be placed before is stored on vuex store

// Local Helpers
// Gets advanced custom fields values from results
export const getAcfField = (results: WPRoot, fieldName: string, defaultValue?: any): any =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
export const getWPTitle = (object: WPRoot): string => (object.title && object.title.rendered) || ''

export const getParticipantsFromApi = (participants: WPRoot[]): Participants =>
  participants.map((person: WPRoot) => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: getWPTitle(person),
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url,
    images: getAcfField(person, 'fotos', []),
    keywords: getAcfField(person, 'palabras_clave', []).map(
      (keyword: WPKeyword) => keyword.name
    )
  }))

// Loops trough participantes, getting a list of unique keywords
export const getKeywordsFromParticipants = (participants: Participants) => {
  const nestedKeywords: string[][] = participants.map(person =>
    person.keywords.map((keyword: string) => keyword)
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
export const getParticipantFromApi = (data: WPResponse): SingleParticipant => {
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
        .filter((img: WpImage) => img.url)
        .map((img: WpImage) => img.url),
      expo: getAcfField(data[0], 'exposicion', [])[0] || {},
      // Related participants
      related: getAcfField(data[0], 'relacionados', []).map((related: WPPost) => ({
        id: related.ID,
        name: related.post_title,
        slug: related.post_name
      })),
      // Arrays of Strings, keywords
      keywords: getAcfField(data[0], 'palabras_clave', []).map((keyword: WPKeyword) => ({
        id: keyword.term_id,
        name: keyword.name,
        slug: keyword.slug
      }))
    }
  )
}

export const getCategoriesFromApi = (data: WPCategories): Categories => {
  return data.map((category: WPCategory) => ({
    id: category.id,
    name: category.name
      .split('-')[category.name.split('-').length - 1].replace(/\s+/g, '')
  }))
}

// type SortedEvent = {
//   id: number,
//   name: string,
//   dateTime: Date,
//   date: string,
//   month: string,
//   time: string
// }

// export const getCalendarFromApi = (apiResponse = []) => {
//   const events = apiResponse.data && apiResponse.data.items
//   // Get closest to today's date

//   const closestToToday = events
//     .map((event: Event) => new Date(event.start.dateTime))
//     .reduce(findCloseToToday)

//   const sortedEvents: SortedEvent[] = events.sort(sortEventsByDate).map((event: Event) => ({
//     id: event.id,
//     name: event.summary,
//     dateTime: new Date(event.start.dateTime),
//     date: getDayOfDateTimeString(event.start.dateTime),
//     month: getMonthOfDateTimeString(event.start.dateTime),
//     time: getTimeOfDateTimeString(event.start.dateTime)
//   }))

//   // Find event with closest to today's date
//   const closestOnSortedEvents = sortedEvents.find(
//     (event: SortedEvent) =>
//       event.dateTime && event.dateTime.getTime() === closestToToday.getTime()
//   )

//   // Based on the found item index, ten events are displayed on the calendar
//   const spliceIndex = closestOnSortedEvents
//     ? sortedEvents.indexOf(closestOnSortedEvents)
//     : 0

//   return sortedEvents.splice(spliceIndex, 10)
// }
