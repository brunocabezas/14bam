import { dateStringToDate } from '@/helpers/dateHelpers'
import {
  getExpositionsFromApi,
  getParticipantsFromApi,
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
  exposition: state => expoId => {
    return state.expositions.find(expo => expo.id === expoId) || {}
  },
  isLoadingExpositions: isLoadingHelper('expositions'),
  expositionsNotFetched: isNotFetchedHelper('expositions'),
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
  // Main programs
  mainPrograms: state => {
    return getMainPrograms(state.main_programs.responseData)
  },
  isLoadingMainPrograms: isLoadingHelper('main_programs'),
  mainProgramsNotFetched: isNotFetchedHelper('main_programs'),
  // Sponsors
  oldSponsors: state => {
    return getSponsorsFromApi(state.sponsors.responseData)
  },
  sponsors: state => {
    const sponsors = getSponsorsFromApi(state.sponsors.responseData)
    const categories = getCategoriesFromApi(state.categories.responseData)
    return sponsors.map(sponsor => ({
      ...sponsor,
      category: categories.find(cat => cat.id === sponsor.categoryId)
    }))
  },
  isLoadingSponsors: isLoadingHelper('sponsors'),
  sponsorsNotFetched: isNotFetchedHelper('sponsors'),
  categoriesFromSponsors: state => {
    const sponsors = getSponsorsFromApi(state.sponsors.responseData).filter(
      sp => sp.category
    )
    const categories = sponsors.map(sp => sp.category)
    const categoriesIds = sponsors.map(sp => sp.category.id).filter(onlyUnique)
    return (
      categoriesIds
        .filter(catId => sponsors.find(s => s.category.id === catId))
        // Appending sponsors
        .map(catId => ({
          ...categories.find(cat => cat.id === catId),
          sponsors: sponsors.filter(s => s.category.id === catId)
        }))
    )
  },
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories')
}
