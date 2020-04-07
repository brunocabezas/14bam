import { WPCategories, WPCategory } from '../types/wordpressTypes'
import { Categories, Sponsor, Category, SponsorCategory } from '../types/types'
import { onlyUnique } from '@/helpers/arrayHelpers'
import { SponsorFromAPI } from './sponsors'
import { wpCategory } from '../state/initialWordpressState'

export const getCategoriesFromApi = (data: WPCategories): SponsorCategory[] => {
  return data.map((category: WPCategory) => ({
    id: category.id,
    name: category.name
      .split('-')[category.name.split('-').length - 1].replace(/\s+/g, '')
  }))
}

// Categories sorted by the order attribute
export const getCategoriesFromSponsors = (sponsors : SponsorFromAPI[]) : Categories => {
  const categories = sponsors.map((sp: SponsorFromAPI) => sp.category)
  const categoriesIds : number[] = sponsors
    // Only using categories with id defined
    .filter(s => s.category && s.category.id)
    .map((sp: SponsorFromAPI) => String(sp.category.id))
    .filter(onlyUnique)
    .map(catId => parseInt(catId, 10))

  // Append sponsors
  const sortedCategories : Categories = categoriesIds
    .map((catId: number) : Category => {
      const category : WPCategory = categories
        .find((cat) => cat.id === catId) || wpCategory
      // Order is parsed from description, if contains
      // 'order:1' or 'order:1 ', this string will represent
      // a way to sort this item; if this is not found on description,
      // order is equal to categories length, so item will show up last
      const order =
        category &&
          category.description &&
          category.description.includes('order:')
          ? category.description.split('order:')[1].replace(' ', '')
          : String(categories.length + 1)
      return {
        ...category,
        id: catId,
        order,
        // For now filtering sponsors by author
        sponsors: sponsors
          // Transform all sponsors with order zero to be the last ones,
          // meaning with order equal or bigger than the total items
          .map((sponsor: SponsorFromAPI) : SponsorFromAPI =>
            sponsor.order === 0
              ? Object.assign({}, sponsor, {
                order: sponsors.length + 2
              })
              : sponsor
          )
          .filter((s: SponsorFromAPI) => s.category && s.category.id === catId)
          // Sorting by order
          .sort((a: Sponsor, b: Sponsor) => {
            return a.order - b.order
          })
      }
    })
    // .filter((cat: Category) => !cat.slug.includes('uncategorized'))
    .sort((a: Category, b: Category) => parseInt(a.order, 10) - parseInt(b.order, 10))

  // First category should be labeled 'Organiza', if this is not the case
  // Swap the first element with the second
  const swapFirstCategory =
    sortedCategories[0] &&
    sortedCategories[0].name.toLowerCase().includes('financia')

  if (swapFirstCategory) {
    const firstElem = sortedCategories.shift()
    const secondElem = sortedCategories.shift()
    if (firstElem && secondElem) {
      sortedCategories.unshift(firstElem)
      sortedCategories.unshift(secondElem)
    }
  }
  return sortedCategories
}
