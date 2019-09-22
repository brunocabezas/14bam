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
  loadMainPrograms: fetchData({
    url: routes.generalPrograms,
    slug: mutationTypes.mainPrograms
  })
}
