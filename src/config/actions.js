import { fetch as fetchData } from '../helpers/remoteDataHelper'
import mutationTypes from './baseMutationTypes'
import routes from '../../api/routes'

export default {
  loadExpositions: fetchData({
    url: routes.expositions,
    slug: mutationTypes.expositions
  }),
  loadExposition: (store, { slug }) =>
    fetchData({
      url: routes.exposition(slug),
      slug: mutationTypes.exposition
    })(store),
  loadParticipants: fetchData({
    url: routes.participants,
    slug: mutationTypes.participants
  }),
  loadParticipant: (store, { slug }) =>
    fetchData({
      url: routes.participant(slug),
      slug: mutationTypes.participant
    })(store),
  loadMainPrograms: fetchData({
    url: routes.mainPrograms,
    slug: mutationTypes.mainPrograms
  }),
  loadProgram: (store, { slug }) =>
    fetchData({
      url: routes.program(slug),
      slug: mutationTypes.program
    })(store),
  loadSponsors: fetchData({
    url: routes.sponsors,
    slug: mutationTypes.sponsors
  }),
  loadActivities: fetchData({
    url: routes.programActivities,
    slug: mutationTypes.activities
  }),
  loadWpCategories: fetchData({
    url: routes.categories,
    slug: mutationTypes.categories
  }),
  loadWpPages: fetchData({
    url: routes.pages,
    slug: mutationTypes.pages
  })
}
