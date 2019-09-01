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
    hour2: (results[0].acf_fields && results[0].acf_fields.horarios_2) || '',
    web: (results[0].acf_fields && results[0].acf_fields.web) || '',
    address: (results[0].acf_fields && results[0].acf_fields.direccion) || '',
    startDate: (results[0].acf_fields && results[0].acf_fields.fecha_inicio) || '',
    endDate: (results[0].acf_fields && results[0].acf_fields.fecha_termino) || '',
    description: (results[0].acf_fields && results[0].acf_fields.texto_curatorial) || '',
    name: (results[0].title && results[0].title.rendered) || '',
    artists: (results[0].acf_fields && results[0].acf_fields.artistas
      .map(art => ({ id: art.id, name: art.post_title }))) || [],
    curators: (results[0].acf_fields && results[0].acf_fields.curadores
      .map(art => ({ id: art.id, name: art.post_title }))) || []
  })
