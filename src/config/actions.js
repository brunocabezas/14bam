import { fetch as fetchData } from '../helpers/remoteDataHelper'
import mutationTypes from './baseMutationTypes'
import routes from '../../api/routes'

export default {
  loadExpositions: fetchData({
    url: routes.expositions,
    slug: mutationTypes.expositions
  }),
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
    url: routes.generalPrograms,
    slug: mutationTypes.mainPrograms
  }),
  loadSponsors: fetchData({
    url: routes.sponsors,
    slug: mutationTypes.sponsors
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
