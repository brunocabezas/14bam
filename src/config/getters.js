import { dateStringToDate } from '@/helpers/dateHelpers'
import {
  getExpositionsFromApi,
  getExpositionFromApi,
  getParticipantsFromApi,
  getParticipantFromApi,
  getMainPrograms
} from '@/helpers/apiHelpers'
import { isLoadingHelper } from '@/helpers/remoteDataHelper'
import { isNotFetchedHelper } from '../helpers/remoteDataHelper'
import {
  getKeywordsFromParticipants,
  getSponsorsFromApi,
  getCategoriesFromApi
} from '../helpers/apiHelpers'
import { onlyUnique } from '../helpers/arrayHelpers'
import { pageFromStateByLabel } from '../helpers/pageHelpers'

export default {
  // Expositions
  expositionsByDate: state => {
    if (!state.expositions || !state.expositions.responseData) {
      return []
    }
    return getExpositionsFromApi(state.expositions.responseData).sort(
      (a, b) => dateStringToDate(a.startDate) - dateStringToDate(b.startDate)
    )
  },
  isLoadingExpositions: isLoadingHelper('expositions'),
  expositionsNotFetched: isNotFetchedHelper('expositions'),

  // Exposition
  exposition: state => {
    return getExpositionFromApi(state.exposition.responseData)
  },
  isLoadingExposition: isLoadingHelper('exposition'),
  expositionNotFetched: isNotFetchedHelper('exposition'),

  // Participants
  participants: state => {
    return getParticipantsFromApi(state.participants.responseData)
  },
  isLoadingParticipants: isLoadingHelper('participants'),
  participantsNotFetched: isNotFetchedHelper('participants'),
  keywordsFromParticipants: state =>
    getKeywordsFromParticipants(
      getParticipantsFromApi(state.participants.responseData)
    ),

  // Participant
  participant: state => {
    return getParticipantFromApi(state.participant.responseData)
  },
  isLoadingParticipant: isLoadingHelper('participant'),
  participantNotFetched: isNotFetchedHelper('participant'),

  // Main programs
  mainPrograms: state => {
    return getMainPrograms(state.main_programs.responseData)
  },
  isLoadingMainPrograms: isLoadingHelper('main_programs'),
  mainProgramsNotFetched: isNotFetchedHelper('main_programs'),

  // Sponsors
  oldSponsors: state => {
    // For now filtering sponsors by author
    return getSponsorsFromApi(state.sponsors.responseData).filter(
      sponsor => sponsor.category.slug === 'uncategorized'
    )
  },
  sponsors: state => {
    const sponsors = getSponsorsFromApi(state.sponsors.responseData)
    const categories = getCategoriesFromApi(state.categories.responseData)

    return (
      sponsors
        // For now, filtering sponsors created by the admin wp user
        .filter(sponsor => sponsor.category.slug !== 'uncategorized')
        .map(sponsor => ({
          ...sponsor,
          category: categories.find(cat => cat.id === sponsor.category.id)
        }))
    )
  },
  isLoadingSponsors: isLoadingHelper('sponsors'),
  sponsorsNotFetched: isNotFetchedHelper('sponsors'),
  categoriesFromSponsors: state => {
    const sponsors = getSponsorsFromApi(state.sponsors.responseData)
      .filter(sp => sp.category)
      .filter(sponsor => sponsor.category.slug !== 'uncategorized')
    const categories = sponsors.map(sp => sp.category)
    const categoriesIds = sponsors
      .map(sp => sp.category.term_id)
      .filter(onlyUnique)

    // Append sponsors
    return categoriesIds
      .map(catId => {
        const category = categories.find(cat => cat.term_id === catId)
        // Order is parsed from description, if contains
        // 'order:1' or 'order:1 ', this string will represent
        // a way to sort this item; if this is not found on description,
        // order is equal to categories length, so item will show up last
        const order =
          category && category.description.includes('order:')
            ? category.description.split('order:')[1].replace(' ', '')
            : String(categories.length + 1)
        return {
          ...category,
          id: catId,
          order,
          // For now filtering sponsors by author
          sponsors: sponsors.filter(s => s.category.term_id === catId)
        }
      })
      .sort((a, b) => a.order - b.order)
  },
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories'),

  // Wordpress static pages
  aboutPage: state => pageFromStateByLabel('sobre', state),
  contestPage: state => pageFromStateByLabel('concurso', state),
  abstractPage: state => pageFromStateByLabel('mundo', state),
  abstractText: state => {
    const abstractPage = state.pages.responseData.find(page =>
      page.slug.includes('mundo')
    )
    return abstractPage ? abstractPage.content.rendered : ''
  },
  isLoadingPages: isLoadingHelper('pages'),
  pagesNotFetched: isNotFetchedHelper('pages')
}
