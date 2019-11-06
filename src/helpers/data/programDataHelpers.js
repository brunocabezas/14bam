import { getAcfField, getWPTitle } from '../apiHelpers'

// Main program is not included
export const getMainPrograms = data => {
  return data.map(({ id, slug, ...others }) => ({
    id,
    slug,
    shortDescription: getAcfField(others, 'abstract'),
    name: getWPTitle(others),
    text: getAcfField(others, 'texto'),
    images: getAcfField(others, 'galeria'),
    events: getAcfField(others, 'programas', [])
  }))
}

export const getProgramFromApi = (apiResponse = []) => {
  // Getting the first program
  const firstProgram = apiResponse[0]
  if (!firstProgram) {
    return {
      mainImg: { url: '', sizes: { medium: '' } },
      id: -1,
      events: [],
      mainProgram: {},
      date: {
        jsDate: new Date()
      },
      images: []
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
      events: getAcfField(firstProgram, 'activities', [])
    }
  )
}