
const getAcfField = (results, fieldName, defaultValue = '') =>
  (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

export const getSponsorsFromApi = sponsors =>
  sponsors.map(sponsor => ({
    logo: sponsor.acf_fields && sponsor.acf_fields.logo,
    name: (sponsor.title && sponsor.title.rendered) || ''
  }))

export const getParticipantsFromApi = participants =>
  participants.map(person => ({
    id: person.id,
    wpId: person.id,
    name: (person.title && person.title.rendered) || '',
    img: getAcfField(person, 'fotos', [{ url: '' }])[0].url
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
    place: getAcfField(results, 'espacio'),
    hour: getAcfField(results, 'horarios'),
    hour2: getAcfField(results, 'horarios_2'),
    web: getAcfField(results, 'web'),
    address: getAcfField(results, 'direccion'),
    startDate: getAcfField(results, 'fecha_inicio'),
    endDate: getAcfField(results, 'fecha_termino'),
    description: getAcfField(results, 'texto_curatorial'),
    artists: getAcfField(results, 'artistas', []),
    curators: getAcfField(results, 'curadores', []),
    name: (results[0].title && results[0].title.rendered) || ''
  })
