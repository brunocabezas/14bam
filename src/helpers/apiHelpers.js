// Gets advanced custom fields values from results
const getAcfField = (results, fieldName, defaultValue = '') =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
const getWPTitle = object =>
  (object.title && object.title.rendered) || ''

export const getSponsorsFromApi = sponsors =>
  sponsors.map(sponsor => ({
    logo: sponsor.acf_fields && sponsor.acf_fields.logo,
    name: (sponsor.title && sponsor.title.rendered) || ''
  }))
export const getExpositionsFromApi = expositions =>
  expositions.map(expo => ({
    id: expo.id,
    wpId: expo.id,
    slug: expo.slug,
    place: (expo.acf_fields && expo.acf_fields.espacio) || '',
    hour: (expo.acf_fields && expo.acf_fields.horarios) || '',
    name: (expo.title && expo.title.rendered) || ''
  }))

export const getExpositionFromApi = (apiResponse = []) =>
  Object.assign({}, {
    id: apiResponse[0].id,
    wpId: apiResponse[0].id,
    slug: apiResponse[0].slug,
    place: getAcfField(apiResponse[0], 'espacio'),
    hour: getAcfField(apiResponse[0], 'horarios'),
    hour2: getAcfField(apiResponse[0], 'horarios_2'),
    web: getAcfField(apiResponse[0], 'web'),
    address: getAcfField(apiResponse[0], 'direccion'),
    startDate: getAcfField(apiResponse[0], 'fecha_inicio'),
    endDate: getAcfField(apiResponse[0], 'fecha_termino'),
    description: getAcfField(apiResponse[0], 'texto_curatorial'),
    artists: getAcfField(apiResponse[0], 'artistas', []),
    curators: getAcfField(apiResponse[0], 'curadores', []),
    name: getWPTitle(apiResponse[0])
  })

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: (person.title && person.title.rendered) || '',
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url
  }))

export const getParticipantFromApi = (apiResponse = []) =>
  Object.assign({}, {
    id: apiResponse[0].id,
    wpId: apiResponse[0].id,
    slug: apiResponse[0].slug,
    name: getWPTitle(apiResponse[0]),
    bio: getAcfField(apiResponse[0], 'bio'),
    workTitle: getAcfField(apiResponse[0], 'work_title'),
    workDescription: getAcfField(apiResponse[0], 'work_text'),
    img: getAcfField(apiResponse[0], 'fotos', [{ url: '' }])[0].url,
    // Filtering images with non valid url
    images: getAcfField(apiResponse[0], 'fotos', [{ url: '' }])
      .filter(img => img.url).map(img => img.url),
    expo: getAcfField(apiResponse[0], 'exposicion', [])[0] || {}
  })

// Main program is not included
export const getPrograms = ({ data }) => {
  return data.filter(program => true)
    .map(({ id, slug, ...others }) => ({
      id, slug, name: getWPTitle(others), events: getAcfField(others, 'programas', [])
    }))
}

export const getProgramFromApi = (apiResponse = []) => {
  // Getting the first program
  const firstProgram = apiResponse.data[0]
  return Object.assign({}, {
    id: firstProgram.id,
    slug: firstProgram.slug,
    name: getWPTitle(firstProgram),
    text: getAcfField(firstProgram, 'texto'),
    events: getAcfField(firstProgram, 'programas', [])
  })
}
