import sortBy from 'array-sort-by'
import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { dateStringToDate } from '../../helpers/dateHelpers'
import { WPResponseItem, WPResponse } from '../types/wordpressTypes'
import { Activities, Activity } from '../types/types'
import { event } from '../state/initialState'

export const getEventsFromApi = (activities: WPResponse): Activities => {
  const result = activities
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
        place: getAcfField(act, 'place'),
        date: {
          jsDate: dateStringToDate(dateString),
          day: dateString.split(' ')[0],
          month: dateString.split('de ')[1],
          time: getAcfField(act, 'time'),
          dateString
        }
      }
    })
  return sortBy(result, (s: Activity) => -s.date.jsDate)
}

export const getEventBySlug = (events: Activities, eventSlug: string) : Activity =>
  events.find((event: Activity) => event.slug === eventSlug) || event
