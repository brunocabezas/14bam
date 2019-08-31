export const getSponsorsFromApi = apiSponsors =>
  apiSponsors.map(sponsor => ({
    logo: sponsor.acf_fields && sponsor.acf_fields.logo,
    name: (sponsor.title && sponsor.title.rendered) || ''
  }))

export const getExpositionsFromApi = apiSponsors =>
  apiSponsors.map(expo => ({
    wpId: expo.id,
    place: (expo.acf_fields && expo.acf_fields.espacio) || '',
    hour: (expo.acf_fields && expo.acf_fields.horarios) || '',
    name: (expo.title && expo.title.rendered) || ''
  }))
