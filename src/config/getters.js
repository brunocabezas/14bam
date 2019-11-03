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
  getCategoriesFromApi,
  getActivitiesFromApi
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
  expositionBySlug: (state, { expositionsByDate }) => expoSlug => {
    const isOnState = expositionsByDate.find(e => e.slug === expoSlug)
    return isOnState || getExpositionFromApi(state.exposition.responseData)
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

  activities: st => {
    return getActivitiesFromApi(st.activities.responseData)
  },
  activityBySlug: (st, getters) => eventSlug => {
    return (
      getters.activities.find(event => event.slug === eventSlug) || {
        place: {},
        participants: []
      }
    )
  },
  isLoadingActivities: isLoadingHelper('activities'),
  activitiesNotFetched: isNotFetchedHelper('activities'),

  // Sponsors
  oldSponsors: (state, { sponsorsFromState }) => {
    // For now filtering sponsors by author
    return sponsorsFromState.filter(
      sponsor => sponsor.category.slug === 'uncategorized'
    )
  },
  sponsorsFromState: state => getSponsorsFromApi(state.sponsors.responseData),
  sponsors: (state, { sponsorsFromState }) => {
    const categories = getCategoriesFromApi(state.categories.responseData)
    return (
      sponsorsFromState
        // For now, filtering sponsors created by the admin wp user
        .filter(sponsor => sponsor.category.slug !== 'uncategorized')
        .map(sponsor => ({
          ...sponsor,
          category: categories.find(cat => cat.id === sponsor.category.term_id)
        }))
        .filter(sp => sp.category)
    )
  },
  isLoadingSponsors: isLoadingHelper('sponsors'),
  sponsorsNotFetched: isNotFetchedHelper('sponsors'),
  categoriesFromSponsors: (state, { sponsorsFromState }) => {
    const categories = sponsorsFromState.map(sp => sp.category)
    const categoriesIds = sponsorsFromState
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
          sponsors: sponsorsFromState.filter(s => s.category.term_id === catId)
        }
      })
      .filter(cat => !cat.slug.includes('uncategorized'))
      .sort((a, b) => a.order - b.order)
  },
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories'),

  // Wordpress static pages
  aboutPage: state => pageFromStateByLabel('sobre', state),
  contestPage: state => pageFromStateByLabel('concurso', state),
  abstractPage: state => pageFromStateByLabel('mundo', state),
  abstractText: (state, { abstractPage }) =>
    abstractPage ? abstractPage.content.rendered : '',
  isLoadingPages: isLoadingHelper('pages'),
  pagesNotFetched: isNotFetchedHelper('pages')
}
