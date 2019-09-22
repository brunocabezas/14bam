import { dateStringToDate } from '@/helpers/dateHelpers'
import { getExpositionsFromApi } from '@/helpers/apiHelpers'
import { isLoadingHelper } from '@/helpers/remoteDataHelper'

export default {
  expositionsByDate: state => {
    return getExpositionsFromApi(state.expositions.responseData).sort((a, b) =>
      dateStringToDate(a.startDate) - dateStringToDate(b.startDate))
  },
  exposition: state => expoId => {
    state.expositions.find(expo => expo.id === expoId)
  },
  isLoadingExpositions: isLoadingHelper('expositions')
}
