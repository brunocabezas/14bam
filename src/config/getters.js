import { dateStringToDate } from '@/helpers/dateHelpers'
import {
  getParticipantsFromApi,
  getParticipantFromApi,
  getKeywordsFromParticipants,
  getCategoriesFromApi
} from '@/helpers/apiHelpers'
import { isLoadingHelper, isNotFetchedHelper } from '@/helpers/remoteDataHelper'

import { onlyUnique } from '@/helpers/arrayHelpers'
import { pageFromStateByLabel } from '@/helpers/data/pageDataHelpers'
import {
  getMainPrograms,
  getProgramFromApi
} from '@/helpers/data/programDataHelpers'
import { getSponsorsFromApi } from '@/helpers/data/sponsorDataHelper'
import { getActivitiesFromApi } from '@/helpers/data/eventDataHelpers'
import {
  getExpositionsFromApi,
  getExpositionFromApi
} from '../helpers/data/expositionDataHelpers'

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
    return getParticipantsFromApi(state.participants.responseData).sort(
      (a, b) => a.name - b.name
    )
  },
  isLoadingParticipants: isLoadingHelper('participants'),
  participantsNotFetched: isNotFetchedHelper('participants'),
  keywordsFromParticipants: (state, { participants }) =>
    getKeywordsFromParticipants(participants),

  // Participant
  participant: state => {
    return getParticipantFromApi(state.participant.responseData)
  },
  isLoadingParticipant: isLoadingHelper('participant'),
  participantNotFetched: isNotFetchedHelper('participant'),

  // Programs
  mainPrograms: state => {
    return getMainPrograms(state.main_programs.responseData)
  },
  isLoadingMainPrograms: isLoadingHelper('main_programs'),
  mainProgramBySlug: (st, { mainPrograms }) => slug =>
    mainPrograms.find(program => program.slug === slug) || {},
  mainProgramsNotFetched: isNotFetchedHelper('main_programs'),

  programFromState: state => {
    return getProgramFromApi(state.program.responseData)
  },
  isLoadingProgram: isLoadingHelper('program'),
  programNotFetched: isNotFetchedHelper('program'),

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

  // TODO remove when FutureHome is Home
  oldSponsors: (state, { sponsorsFromState }) => {
    // For now filtering sponsors by author
    return sponsorsFromState.filter(
      sponsor => sponsor.category.slug === 'uncategorized'
    )
  },

  // Sponsors
  sponsorsFromState: state => getSponsorsFromApi(state.sponsors.responseData),

  // used on categoriesFromSponsors
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
    const sortedCatgories = categoriesIds
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
          sponsors: sponsorsFromState
            // Trasnform all sponsors with oreder zero to be the last,
            // meaning with order equal or bigger than the total items
            .map(sponsor =>
              sponsor.order === 0
                ? Object.assign({}, sponsor, {
                  order: sponsorsFromState.length + 2
                })
                : sponsor
            )
            .filter(s => s.category.term_id === catId)
            // Sorting by order
            .sort((a, b) => {
              return a.order - b.order
            })
        }
      })
      .filter(cat => !cat.slug.includes('uncategorized'))
      .sort((a, b) => a.order - b.order)

    // First category should be labeled 'Organiza', if this is not the case
    // Swap the first element with the second
    const swapFirstCategory =
      sortedCatgories[0] &&
      sortedCatgories[0].name.toLowerCase().includes('financia')

    if (swapFirstCategory) {
      const firstElem = sortedCatgories.shift()
      const secondElem = sortedCatgories.shift()
      sortedCatgories.unshift(firstElem)
      sortedCatgories.unshift(secondElem)
    }

    return sortedCatgories
  },
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories'),

  // Wordpress static pages
  aboutPage: state => pageFromStateByLabel('sobre', state),
  contestPage: state => pageFromStateByLabel('concurso', state),
  abstractPage: state => pageFromStateByLabel('mundo', state),
  isLoadingPages: isLoadingHelper('pages'),
  pagesNotFetched: isNotFetchedHelper('pages')
}
