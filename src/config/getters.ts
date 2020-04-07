import { isLoadingHelper, isNotFetchedHelper } from '@/helpers/remoteDataHelper'
import { pageFromStateByLabel, WPStaticPageSlug } from '@/config/getters/pages'
import { getMainPrograms, getProgram } from '@/config/getters/programs'
import { getSponsors, getSponsorsFromAPI } from '@/config/getters/sponsors'
import {
  getActivitiesFromApi,
  getActivityBySlug
} from '@/config/getters/activities'
import {
  getExpositionFromApi,
  expositionsSortedByDate
} from './getters/exposition'
import { GetterTree } from 'vuex'
import { Exposition, Program, Event, MainProgram } from './types/types'
import {
  getParticipants,
  getKeywordsFromParticipants,
  getParticipantFromApi
} from './getters/participants'
import {
  getCategoriesFromApi,
  getCategoriesFromSponsors
} from './getters/categories'
import { DataType } from './mutationTypes'

let getters: GetterTree<any, any> = {
  // Expositions
  expositionsByDate: expositionsSortedByDate,
  isLoadingExpositions: isLoadingHelper(DataType.Expositions),
  expositionsNotFetched: isNotFetchedHelper(DataType.Expositions),

  // Exposition
  expositionBySlug: (state, { expositionsByDate }) => (expoSlug: string) => {
    const isOnState = expositionsByDate.find(
      (e: Exposition) => e.slug === expoSlug
    )
    return isOnState || getExpositionFromApi(state.exposition.responseData)
  },
  isLoadingExposition: isLoadingHelper(DataType.Exposition),
  expositionNotFetched: isNotFetchedHelper(DataType.Exposition),

  // Participants
  participants: getParticipants,
  isLoadingParticipants: isLoadingHelper(DataType.Participants),
  participantsNotFetched: isNotFetchedHelper(DataType.Participants),
  keywordsFromParticipants: (state, { participants }) =>
    getKeywordsFromParticipants(participants),

  // Participant
  participant: state => getParticipantFromApi(state.participant.responseData),
  isLoadingParticipant: isLoadingHelper(DataType.Participant),
  participantNotFetched: isNotFetchedHelper(DataType.Participant),

  // Programs
  mainPrograms: state => getMainPrograms(state.main_programs.responseData),
  isLoadingMainPrograms: isLoadingHelper(DataType.MainPrograms),
  mainProgramBySlug: (st, { mainPrograms }) => (slug: string) =>
    mainPrograms.find((program: MainProgram) => program.slug === slug) || {},
  mainProgramsNotFetched: isNotFetchedHelper(DataType.MainPrograms),

  // Program
  programFromState: getProgram,
  isLoadingProgram: isLoadingHelper(DataType.Program),
  programNotFetched: isNotFetchedHelper(DataType.Program),

  // Activities
  activities: st => getActivitiesFromApi(st.activities.responseData),
  activityBySlug: (st, { activities }) => (eventSlug: string) =>
    getActivityBySlug(activities, eventSlug),
  isLoadingActivities: isLoadingHelper(DataType.Activities),
  activitiesNotFetched: isNotFetchedHelper(DataType.Activities),

  // Sponsors - Categories
  // used only on another getter: categoriesFromSponsors
  sponsors: state => {
    const parsedSponsors = getSponsorsFromAPI(state.sponsors.responseData)
    const parsedCategories = getCategoriesFromApi(state.categories.responseData)
    return getSponsors(parsedSponsors, parsedCategories)
  },
  isLoadingSponsors: isLoadingHelper(DataType.Sponsors),
  sponsorsNotFetched: isNotFetchedHelper(DataType.Sponsors),
  // used on Sponsors component
  categoriesFromSponsors: (state, { sponsors }) =>
    getCategoriesFromSponsors(sponsors),
  isLoadingCategories: isLoadingHelper(DataType.Categories),
  categoriesNotFetched: isNotFetchedHelper(DataType.Categories),

  // Wordpress static pages
  aboutPage: state => pageFromStateByLabel(WPStaticPageSlug.About, state),
  contestPage: state => pageFromStateByLabel(WPStaticPageSlug.Contest, state),
  abstractPage: state =>
    pageFromStateByLabel(WPStaticPageSlug.AboutExposition, state),
  isLoadingPages: isLoadingHelper(DataType.Pages),
  pagesNotFetched: isNotFetchedHelper(DataType.Pages)
}

export default getters
