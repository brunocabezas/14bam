import { getAcfField, getWPTitle } from '../apiHelpers'
import { dateStringToDate, isValidDate, findCloseToToday } from '../dateHelpers'

export const getActivitiesFromApi = activities => {
  const result = activities.map(act => {
    // date comes as '7 de noviembre'
    const dateString = getAcfField(act, 'date')
    const image = getAcfField(act, 'image', '')
    return ({
      id: act.id,
      name: getWPTitle(act),
      slug: act.slug,
      description: getAcfField(act, 'description'),
      image: image.sizes ? image.url : image,
      videoUrl: getAcfField(act, 'video'),
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
