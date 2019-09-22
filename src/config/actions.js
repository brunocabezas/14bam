import { fetch as fetchData } from './remoteData'
import mutationTypes from './mutationTypes'
import routes from '../../api/routes'

export default {
  loadExpositions: fetchData({
    url: routes.expositions,
    slug: mutationTypes.expositions
  })
}
