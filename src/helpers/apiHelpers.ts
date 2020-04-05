import { Categories } from '@/config/types/types'
import { WPResponseItem, WPCategories, WPCategory } from '@/config/types/wordpressTypes'

//
// apiHelpers
// All helpers defined here handle API responses and

// This logic layer is ment to format the data as required
// and should be placed before is stored on vuex store

// Local Helpers
// Gets advanced custom fields values from results
export const getAcfField = (results: WPResponseItem, fieldName: string, defaultValue: any = undefined): any =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
export const getWPTitle = (object: WPResponseItem): string => (object.title && object.title.rendered) || ''

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
