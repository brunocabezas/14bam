import { dateStringToDate } from '@/helpers/dateHelpers'
import { getExpositionsFromApi } from '../helpers/apiHelpers'

export default {
  expositionsByDate: state => {
    return getExpositionsFromApi(state.expositions.responseData).sort((a, b) =>
      dateStringToDate(a.startDate) - dateStringToDate(b.startDate))
  }
}
