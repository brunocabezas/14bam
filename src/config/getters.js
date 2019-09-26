import { dateStringToDate } from '@/helpers/dateHelpers'
import {
  getExpositionsFromApi,
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
      sponsor => sponsor.author === 1
    )
  },
  sponsors: state => {
    const sponsors = getSponsorsFromApi(state.sponsors.responseData)
    const categories = getCategoriesFromApi(state.categories.responseData)

    return (
      sponsors
        // For now, filtering sponsors created by the admin wp user
        .filter(sponsor => sponsor.author !== 1)
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
      .filter(sponsor => sponsor.author !== 1)
    const categories = sponsors.map(sp => sp.category)
    const categoriesIds = sponsors
      .map(sp => sp.category.term_id)
      .filter(onlyUnique)

    // Append sponsors
    return categoriesIds.map(catId => ({
      ...categories.find(cat => cat.term_id === catId),
      id: catId,
      // For now filtering sponsors by author
      sponsors: sponsors.filter(s => s.category.term_id === catId)
    }))
  },
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories'),

  // Wordpress Pages
  aboutPage: state => {
    return state.pages.responseData.find(page => page.slug.includes('sobre'))
  },
  contestPage: state => {
    return state.pages.responseData.find(page => page.slug.includes('concurso'))
  },
  isLoadingPages: isLoadingHelper('pages'),
  pagesNotFetched: isNotFetchedHelper('pages')
}
