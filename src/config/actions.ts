import { fetch as fetchData } from '../helpers/remoteDataHelper'
import { DataType } from './mutationTypes'
import routes from '../../api/routes'
import { State } from './types/types'
import { ActionTree } from 'vuex'

// Actions of vuex, that handle async data stored on AppState
const actions: ActionTree<State, any> = {
  loadExpositions: (store) => fetchData(store, {
    url: routes.expositions,
    slug: DataType.Expositions
  }),
  loadExposition: (store, expositionSlug: string) =>
    fetchData(store, {
      url: routes.exposition(expositionSlug),
      slug: DataType.Exposition
    }),
  loadParticipants: (store) => fetchData(store, {
    url: routes.participants,
    slug: DataType.Participants
  }),
  loadParticipant: (store, participantSlug: string) =>
    fetchData(store, {
      url: routes.participant(participantSlug),
      slug: DataType.Participant
    }),
  loadMainPrograms: (store) => fetchData(store, {
    url: routes.mainPrograms,
    slug: DataType.MainPrograms
  }),
  loadProgram: (store: any, programSlug: string) =>
    fetchData(store, {
      url: routes.program(programSlug),
      slug: DataType.Program
    }),
  loadSponsors: (store) => fetchData(store, {
    url: routes.sponsors,
    slug: DataType.Sponsors
  }),
  loadEvents: (store) => fetchData(store, {
    url: routes.programActivities,
    slug: DataType.Activities
  }),
  loadWpCategories: (store) => fetchData(store, {
    url: routes.categories,
    slug: DataType.Categories
  }),
  loadWpPages: (store) => fetchData(store, {
    url: routes.pages,
    slug: DataType.Pages
  })
}

export default actions
