import { dateStringToDate } from '@/helpers/dateHelpers'
import { getExpositionsFromApi } from '@/helpers/apiHelpers'
import { isLoadingHelper } from '@/helpers/remoteDataHelper'
import { isNotFetchedHelper } from '../helpers/remoteDataHelper'

export default {
  expositionsByDate: state => {
    if (!state.expositions || !state.expositions.responseData) {
      return []
    }
    return getExpositionsFromApi(state.expositions.responseData).sort((a, b) =>
      dateStringToDate(a.startDate) - dateStringToDate(b.startDate))
  },
  exposition: state => expoId => {
    return state.expositions.find(expo => expo.id === expoId) || {}
  },
  isLoadingExpositions: isLoadingHelper('expositions'),
  expositionsNotFetched: isNotFetchedHelper('expositions')
}
