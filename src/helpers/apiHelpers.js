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
    place: (results[0].acf_fields && results[0].acf_fields.espacio) || '',
    hour: (results[0].acf_fields && results[0].acf_fields.horarios) || '',
    name: (results[0].title && results[0].title.rendered) || ''
  })
