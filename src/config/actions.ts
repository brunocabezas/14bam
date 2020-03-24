import { fetch as fetchData } from '../helpers/remoteDataHelper'
import TYPES from './types'
import { ActionTree } from 'vuex'
import routes from '../../api/routes'

let actions : ActionTree<any,any> = {
  loadExpositions: fetchData({
    url: routes.expositions,
    slug: TYPES.EXPOSITIONS
  }),
  loadExposition: (store, { slug }) =>
    fetchData({
      url: routes.exposition(slug),
      slug: TYPES.EXPOSITION
    })(store),
  loadParticipants: fetchData({
    url: routes.participants,
    slug: TYPES.PARTICIPANTS
  }),
  loadParticipant: (store, { slug }) =>
    fetchData({
      url: routes.participant(slug),
      slug: TYPES.PARTICIPANT
    })(store),
  loadMainPrograms: fetchData({
    url: routes.mainPrograms,
    slug: TYPES.MAIN_PROGRAMS
  }),
  loadProgram: (store, { slug }) =>
    fetchData({
      url: routes.program(slug),
      slug: TYPES.PROGRAM
    })(store),
  loadSponsors: fetchData({
    url: routes.sponsors,
    slug: TYPES.SPONSORS
  }),
  loadActivities: fetchData({
    url: routes.programActivities,
    slug: TYPES.ACTIVITIES
  }),
  loadWpCategories: fetchData({
    url: routes.categories,
    slug: TYPES.CATEGORIES
  }),
  loadWpPages: fetchData({
    url: routes.pages,
    slug: TYPES.PAGES
  })
}

export default actions;
