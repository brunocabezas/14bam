import { isLoadingHelper, isNotFetchedHelper } from '@/helpers/remoteDataHelper'
import { pageFromStateByLabel, WPStaticPageSlug } from '@/config/getters/page'
import {
  getMainPrograms,
  getProgram
} from '@/config/getters/program'
import { getSponsors } from '@/config/getters/sponsors'
import { getActivitiesFromApi } from '@/config/getters/activity'
import {
  getExpositionFromApi,
  expositionsSortedByDate
} from './getters/exposition'
import { GetterTree } from 'vuex'
import { Exposition, Program, Event } from './types/types'
import {
  getParticipants, getKeywordsFromParticipants,
  getParticipantFromApi
} from './getters/participants'
import { getCategoriesFromApi, getCategoriesFromSponsors } from './getters/categories'

let getters: GetterTree<any, any> = {
  // Expositions
  expositionsByDate: expositionsSortedByDate,
  isLoadingExpositions: isLoadingHelper('expositions'),
  expositionsNotFetched: isNotFetchedHelper('expositions'),
  // Exposition
  expositionBySlug: (state, { expositionsByDate }) => (expoSlug: string) => {
    const isOnState = expositionsByDate.find((e: Exposition) => e.slug === expoSlug)
    return isOnState || getExpositionFromApi(state.exposition.responseData)
  },
  isLoadingExposition: isLoadingHelper('exposition'),
  expositionNotFetched: isNotFetchedHelper('exposition'),

  // Participants
  participants: getParticipants,
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
  mainPrograms: state => getMainPrograms(state.main_programs.responseData),
  isLoadingMainPrograms: isLoadingHelper('main_programs'),
  mainProgramBySlug: (st, { mainPrograms }) => (slug: string) =>
    mainPrograms.find((program: Program) => program.slug === slug) || {},
  mainProgramsNotFetched: isNotFetchedHelper('main_programs'),

  programFromState: getProgram,
  isLoadingProgram: isLoadingHelper('program'),
  programNotFetched: isNotFetchedHelper('program'),

  // Activities
  activities: st => getActivitiesFromApi(st.activities.responseData),
  activityBySlug: (st, getters) => (eventSlug: string) => {
    return (
      getters.activities.find((event: Event) => event.slug === eventSlug) || {
        place: {},
        participants: []
      }
    )
  },
  isLoadingActivities: isLoadingHelper('activities'),
  activitiesNotFetched: isNotFetchedHelper('activities'),

  // Sponsors - Categories
  // used on categoriesFromSponsors
  sponsors: (state) =>
    getSponsors(state.sponsors.responseData, getCategoriesFromApi(state.categories.responseData)),
  isLoadingSponsors: isLoadingHelper('sponsors'),
  sponsorsNotFetched: isNotFetchedHelper('sponsors'),
  categoriesFromSponsors: (state, { sponsors }) => getCategoriesFromSponsors(sponsors),
  isLoadingCategories: isLoadingHelper('categories'),
  categoriesNotFetched: isNotFetchedHelper('categories'),

  // Wordpress static pages
  aboutPage: state => pageFromStateByLabel(WPStaticPageSlug.About, state),
  contestPage: state => pageFromStateByLabel(WPStaticPageSlug.Contest, state),
  abstractPage: state => pageFromStateByLabel(WPStaticPageSlug.AboutExposition, state),
  isLoadingPages: isLoadingHelper('pages'),
  pagesNotFetched: isNotFetchedHelper('pages')
}

export default getters
