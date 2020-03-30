import { getAcfField, getWPTitle } from '../apiHelpers'
import { WPResponse } from '@/config/types/wordpressTypes'
import { MainPrograms, Program } from '@/config/types/types'

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

export const getProgramFromApi = (apiResponse: WPResponse = []): Program => {
  // Getting the first program
  const firstProgram = apiResponse[0]
  if (!firstProgram) {
    return {
      // mainImg: { url: '', sizes: { medium: '' } },
      id: -1,
      slug: '',
      text: '',
      name: '',
      events: [],
      mainProgram: {},
      date: {
        jsDate: new Date()
      },
      images: [],
      participants: []
    }
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
      date: {
        jsDate: new Date()
      },
    }
  )
}
