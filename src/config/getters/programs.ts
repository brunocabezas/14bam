import sortBy from 'array-sort-by'
import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { WPResponse, WPPost } from '@/config/types/wordpressTypes'
import { MainPrograms, Program, State, Activity } from '@/config/types/types'
import { getEventsFromApi } from '@/config/getters/events'
import { program, date } from '../state/initialState'

// Main program is not included
export const getMainPrograms = (dataArray: WPResponse): MainPrograms => {
  return dataArray.map(data => ({
    id: data.id,
    slug: data.slug,
    shortDescription: getAcfField(data, 'abstract'),
    name: getWPTitle(data),
    text: getAcfField(data, 'texto'),
    images: getAcfField(data, 'galeria'),
    events: getAcfField(data, 'programas', [])
  }))
}

const getProgramFromApi = (apiResponse: WPResponse = []): Program => {
  // Getting the first program
  const firstProgram = apiResponse[0]
  if (!firstProgram) {
    return program
  }
  return Object.assign(
    {},
    {
      id: firstProgram.id,
      slug: firstProgram.slug,
      name: getWPTitle(firstProgram),
      text: getAcfField(firstProgram, 'texto'),
      images: getAcfField(firstProgram, 'galeria', []),
      participants: getAcfField(firstProgram, 'participantes', []),
      mainProgram: getAcfField(firstProgram, 'programa_general', [])[0],
      events: getAcfField(firstProgram, 'activities', []),
      date
    }
  )
}

export const getProgram = (state: State): Program => {
  const activities = getEventsFromApi(state.activities.responseData)
  // If there are no activities on state; doing nothing
  const program = getProgramFromApi(state.program.responseData)
  if (activities.length === 0) return program
  // Replacing events with activities from state
  return Object.assign({}, program, {
    events: sortBy(program.events
      .map((event: WPPost) => activities.find((act: Activity) => act.id === event.ID))
      .filter((validItem?: Activity) => validItem), (e: Activity) => e.date.jsDate)
  })
}
