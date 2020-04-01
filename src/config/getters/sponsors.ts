import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { WPResponse } from '@/config/types/wordpressTypes'
import { Sponsors } from '@/config/types/types'

export const getSponsorsFromApi = (sponsors: WPResponse): Sponsors =>
  sponsors.map(sponsor => ({
    date: sponsor.date,
    author: sponsor.author,
    logo: getAcfField(sponsor, 'logo'),
    order: getAcfField(sponsor, 'orden'),
    category: getAcfField(sponsor, 'category'),
    url: getAcfField(sponsor, 'url', null),
    name: getWPTitle(sponsor)
  }))
