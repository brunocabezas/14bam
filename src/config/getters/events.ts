import sortBy from 'array-sort-by'
import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { dateStringToDate } from '../../helpers/dateHelpers'
import { WPResponseItem, WPResponse } from '../types/wordpressTypes'
import { Events, Event } from '../types/types'
import { event } from '../state/initialState'

export const getEventsFromApi = (events: WPResponse): Events => {
  const result = events
    .map((act: WPResponseItem) => {
      // date comes as '7 de noviembre'
      const dateString = getAcfField(act, 'date')
      const image = getAcfField(act, 'image', '')
      return {
        id: act.id,
        name: getWPTitle(act),
        slug: act.slug,
        description: getAcfField(act, 'description'),
        image: image.sizes ? image.url : image,
        videoUrl: getAcfField(act, 'video'),
        participants: getAcfField(act, 'participant'),
        limitedTickets: getAcfField(act, 'limited_tickets'),
        program: getAcfField(act, 'program'),
        // If place is defined, pick the first array item
        place: getAcfField(act, 'place') ? getAcfField(act, 'place')[0] : event.place,
        date: {
          jsDate: dateStringToDate(dateString),
          day: dateString.split(' ')[0],
          month: dateString.split('de ')[1],
          time: getAcfField(act, 'time'),
          dateString
        }
      }
    })
  return sortBy(result, (s: Event) => -s.date.jsDate)
}

export const getEventBySlug = (events: Events, eventSlug: string) : Event =>
  events.find((event: Event) => event.slug === eventSlug) || event
