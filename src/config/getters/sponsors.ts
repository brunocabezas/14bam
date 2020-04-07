import { getAcfField, getWPTitle } from '@/helpers/apiHelpers'
import { WPResponse, WPCategory } from '@/config/types/wordpressTypes'
import { Sponsors, Sponsor, SponsorCategories } from '@/config/types/types'
import { category } from '../state/initialState'

export type SponsorFromAPI = {
  name: string
  logo: string
  date: string
  author: number
  order: number
  category: WPCategory
  url?: string
}

export const getSponsorsFromAPI = (sponsors: WPResponse): SponsorFromAPI[] =>
  sponsors.map(sponsor => ({
    name: getWPTitle(sponsor),
    date: sponsor.date,
    author: sponsor.author,
    logo: getAcfField(sponsor, 'logo'),
    order: getAcfField(sponsor, 'orden'),
    category: getAcfField(sponsor, 'category'),
    url: getAcfField(sponsor, 'url', null)
  }))

export const getSponsors = (
  parsedSponsors: SponsorFromAPI[],
  categories: SponsorCategories
): Sponsors => {
  const sponsors: Sponsors = parsedSponsors
    // For now, filtering sponsors created by the admin wp user
    .filter(
      (sponsor: SponsorFromAPI) =>
        sponsor.category && sponsor.category.slug !== 'uncategorized'
    )
    .map(
      (sponsor: SponsorFromAPI): Sponsor => ({
        ...sponsor,
        category:
          categories.find(
            cat => sponsor.category && cat.id === sponsor.category.term_id
          ) || category
      })
    )
  return sponsors.filter(
    (sponsor: Sponsor) => sponsor.category && sponsor.category.id
  )
}
