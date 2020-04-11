import { getAcfField, getWPTitle } from '@/helpers/apiHelpers'
import { WPResponse, WPCategory, WPCategories, WpImage } from '@/config/types/wordpressTypes'
import { Sponsors, Sponsor, SponsorCategories, SponsorCategory } from '@/config/types/types'
import { category } from '../state/initialState'

export type SponsorFromAPI = {
  name: string
  logo: WpImage,
  date: string
  author: number
  order: number
  category: WPCategory
  url: string
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

export const getSponsorCategoriesFromApi = (categories: WPCategories): SponsorCategory[] => {
  return categories.map((category: WPCategory) => ({
    id: category.id,
    // Replace dashes with spaces
    name: category.name.replace(/\s+/g, ' '),
    description: category.description || ''
  }))
}

export const getSponsors = (
  parsedSponsors: SponsorFromAPI[],
  categories: SponsorCategories
): Sponsors => {
  console.log(parsedSponsors)

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
            cat => cat.id === sponsor.category.term_id
          ) || category
      })
    )
  return sponsors.filter(
    (sponsor: Sponsor) => sponsor.category && sponsor.category.id
  )
}
