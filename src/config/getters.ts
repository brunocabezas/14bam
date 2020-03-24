import { dateStringToDate } from '@/helpers/dateHelpers'
import sortBy from 'array-sort-by'

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
import { isValidDate, findCloseToToday } from '../helpers/dateHelpers'
import { GetterTree } from 'vuex'
import { Participant, Exposition, Program, WPEvent, Event, Sponsor, Category } from './types'

let getters: GetterTree<any, any> = {
  // Expositions
  expositionsByDate: state => {
    if (!state.expositions || !state.expositions.responseData) {
      return []
    }
    return getExpositionsFromApi(state.expositions.responseData).sort(
      (a: Exposition, b: Exposition) => dateStringToDate(a.startDate).valueOf() - dateStringToDate(b.startDate).valueOf()
    )
  },
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
  participants: state => {
    return getParticipantsFromApi(state.participants.responseData).sort(
      (a: Participant, b: Participant) => {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      }
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
  mainProgramBySlug: (st, { mainPrograms }) => (slug: string) =>
    mainPrograms.find((program: Program) => program.slug === slug) || {},
  mainProgramsNotFetched: isNotFetchedHelper('main_programs'),

  programFromState: (state, { activities }) => {
    // If there are no activities on state; doing nothing
    const program = getProgramFromApi(state.program.responseData)
    if (activities.length === 0) return program

    // Replacing events with activities from state
    return Object.assign({}, program, {
      events: sortBy(program.events
        .map((event: WPEvent) => activities.find((act: Event) => act.id === event.ID))
        .filter((validItem: Event) => validItem), (e: Event) => e.date.jsDate)
    })
  },
  isLoadingProgram: isLoadingHelper('program'),
  programNotFetched: isNotFetchedHelper('program'),

  activities: st => {
    return getActivitiesFromApi(st.activities.responseData)
  },
  // Gets activities starting today or after
  acitiviesFromNow: (st, { activities }) => {
    const closestToToday = [...activities]
      .map(act => act.date.jsDate)
      .filter(date => isValidDate(date))
      .reduce(findCloseToToday, activities[0])

    // Find event with closest to today's date
    const closestOnSortedEvents = activities.find(
      (event: Event) =>
        event.date.jsDate &&
        event.date.jsDate.getTime &&
        event.date.jsDate.getTime() === closestToToday.getTime()
    )

    // Based on the found item index, ten events are displayed on the calendar
    // eslint-disable-next-line no-unused-vars
    const spliceIndex = closestOnSortedEvents
      ? activities.indexOf(closestOnSortedEvents)
      : 0

    return activities.slice(spliceIndex)
  },
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

  // TODO remove when FutureHome is Home
  oldSponsors: (state, { sponsorsFromState }) => {
    // For now filtering sponsors by author
    return sponsorsFromState.filter(
      (sponsor: Sponsor) => sponsor.category.slug === 'uncategorized'
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
        .filter((sponsor: Sponsor) => sponsor.category.slug !== 'uncategorized')
        .map((sponsor: Sponsor) => ({
          ...sponsor,
          category: categories.find((cat: Category) => cat.id === sponsor.category.term_id)
        }))
        .filter((sponsor: Sponsor) => sponsor.category)
    )
  },
  isLoadingSponsors: isLoadingHelper('sponsors'),
  sponsorsNotFetched: isNotFetchedHelper('sponsors'),
  categoriesFromSponsors: (state, { sponsorsFromState }) => {
    const categories = sponsorsFromState.map((sp: Sponsor) => sp.category)
    const categoriesIds = sponsorsFromState
      .map((sp: Sponsor) => sp.category.term_id)
      .filter(onlyUnique)

    // Append sponsors
    const sortedCatgories = categoriesIds
      .map((catId: number) => {
        const category = categories.find((cat: Category) => cat.term_id === catId)
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
            .map((sponsor: Sponsor) =>
              sponsor.order === 0
                ? Object.assign({}, sponsor, {
                  order: sponsorsFromState.length + 2
                })
                : sponsor
            )
            .filter((s: Sponsor) => s.category.term_id === catId)
            // Sorting by order
            .sort((a: Sponsor, b: Sponsor) => {
              return a.order - b.order
            })
        }
      })
      .filter((cat: Category) => !cat.slug.includes('uncategorized'))
      .sort((a: Sponsor, b: Sponsor) => a.order - b.order)

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

export default getters
