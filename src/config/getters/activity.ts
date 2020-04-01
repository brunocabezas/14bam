import sortBy from 'array-sort-by'
import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { dateStringToDate } from '../../helpers/dateHelpers'
import { WPRoot, WPResponse } from '../types/wordpressTypes'
import { Activities, Activity } from '../types/types'

export const getActivitiesFromApi = (activities : WPResponse) : Activities => {
  const result = activities
    .map((act : WPRoot) => {
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
        place: getAcfField(act, 'place')[0],
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