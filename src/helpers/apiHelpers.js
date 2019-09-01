
const getAcfField = (results, fieldName, defaultValue = '') =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

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

export const getExpositionFromApi = (results = []) =>
  Object.assign({}, {
    id: results[0].id,
    wpId: results[0].id,
    slug: results[0].slug,
    place: getAcfField(results[0], 'espacio'),
    hour: getAcfField(results[0], 'horarios'),
    hour2: getAcfField(results[0], 'horarios_2'),
    web: getAcfField(results[0], 'web'),
    address: getAcfField(results[0], 'direccion'),
    startDate: getAcfField(results[0], 'fecha_inicio'),
    endDate: getAcfField(results[0], 'fecha_termino'),
    description: getAcfField(results[0], 'texto_curatorial'),
    artists: getAcfField(results[0], 'artistas', []),
    curators: getAcfField(results[0], 'curadores', []),
    name: (results[0].title && results[0].title.rendered) || ''
  })

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    slug: person.slug,
    name: (person.title && person.title.rendered) || '',
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url
  }))

export const getParticipantFromApi = (results = []) =>
  Object.assign({}, {
    id: results[0].id,
    wpId: results[0].id,
    slug: results[0].slug,
    name: (results[0].title && results[0].title.rendered) || '',
    bio: getAcfField(results[0], 'bio'),
    workTitle: getAcfField(results[0], 'work_title'),
    workDescription: getAcfField(results[0], 'work_text'),
    img: getAcfField(results[0], 'fotos', [{ url: '' }])[0].url,
    expo: getAcfField(results[0], 'exposicion', [])
  })
