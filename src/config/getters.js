import { dateStringToDate } from '@/helpers/dateHelpers'
import {
  getExpositionsFromApi,
  getParticipantsFromApi
} from '@/helpers/apiHelpers'
import { isLoadingHelper } from '@/helpers/remoteDataHelper'
import { isNotFetchedHelper } from '../helpers/remoteDataHelper'
import { getKeywordsFromParticipants } from '../helpers/apiHelpers'

export default {
  expositionsByDate: state => {
    if (!state.expositions || !state.expositions.responseData) {
      return []
    }
    return getExpositionsFromApi(state.expositions.responseData).sort(
      (a, b) => dateStringToDate(a.startDate) - dateStringToDate(b.startDate)
    )
  },
  exposition: state => expoId => {
    return state.expositions.find(expo => expo.id === expoId) || {}
  },
  participants: state => {
    return getParticipantsFromApi(state.participants.responseData)
  },
  isLoadingExpositions: isLoadingHelper('expositions'),
  expositionsNotFetched: isNotFetchedHelper('expositions'),
  isLoadingParticipants: isLoadingHelper('participants'),
  participantsNotFetched: isNotFetchedHelper('participants'),
  keywordsFromParticipants: state =>
    getKeywordsFromParticipants(
      getParticipantsFromApi(state.participants.responseData)
    )
}
