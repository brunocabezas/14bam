import { getAcfField, getWPTitle } from '../apiHelpers'

export const getSponsorsFromApi = sponsors =>
  sponsors.map(sponsor => ({
    date: sponsor.date,
    author: sponsor.author,
    logo: getAcfField(sponsor, 'logo'),
    order: getAcfField(sponsor, 'orden'),
    category: getAcfField(sponsor, 'category'),
    url: getAcfField(sponsor, 'url', null),
    name: getWPTitle(sponsor)
  }))
