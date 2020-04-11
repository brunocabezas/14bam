import {
  Categories,
  Sponsor,
  Category,
  SponsorCategory,
  Sponsors
} from '../types/types'
import { onlyUnique } from '@/helpers/arrayHelpers'
import { sponsorCategory } from '../state/initialState'

// Categories sorted by the order attribute
export const getCategoriesFromSponsors = (sponsors: Sponsors): Categories => {
  const categoriesFromSponsors: SponsorCategory[] = sponsors.map(
    (sp: Sponsor) => sp.category
  )
  // Using sponsors, to get an array of available categories_ids to display
  const sortedCategories: Categories = sponsors
    // Only using categories with id defined
    .filter(s => s.category && s.category.id)
    // Map so string to work with onlyUnique
    .map((sp: Sponsor) => String(sp.category.id))
    .filter(onlyUnique)
    // Last step to have a unique categories_ids array
    .map(catId => parseInt(catId, 10))
    // Map a category from API for each categoriy id in the array
    .map(
      (catId: number): Category => {
        const category: SponsorCategory =
          categoriesFromSponsors.find(cat => cat.id === catId) ||
          sponsorCategory
        // Order is parsed from description, if contains
        // 'order:1' or 'order:1 ', this string will represent
        // a way to sort this item; if this is not found on description,
        // order is equal to categories length, so item will show up last
        const order =
          category &&
          category.description &&
          category.description.includes('order:')
            ? category.description.split('order:')[1].replace(' ', '')
            : String(categoriesFromSponsors.length + 1)
        return {
          ...category,
          id: catId,
          order,
          // For now filtering sponsors by author
          sponsors: sponsors
            // Transform all sponsors with order zero to be the last ones,
            // meaning with order equal or bigger than the total items
            .map(
              (sponsor: Sponsor): Sponsor =>
                sponsor.order === 0
                  ? Object.assign({}, sponsor, {
                    order: sponsors.length + 2
                  })
                  : sponsor
            )
            .filter((s: Sponsor) => s.category && s.category.id === catId)
            // Sorting by order
            .sort((a: Sponsor, b: Sponsor) => {
              return a.order - b.order
            })
        }
      }
    )
    // Sort by order attribute
    .sort(
      (a: Category, b: Category) =>
        parseInt(a.order, 10) - parseInt(b.order, 10)
    )

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
