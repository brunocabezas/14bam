
import { Component, Vue } from 'vue-property-decorator'
import { loadParticipant } from '../../../../api/client'
import { getParticipantFromApi } from '../../../helpers/apiHelpers'
import Carousel from '@/components/common/Carousel.vue'
import store from '@/config/store'
import urls from '@/config/urls'

@Component({
  store,
  components: {
    Carousel
  }
})
class Participant extends Vue {
  urls = urls

  get participant () {
    return this.$store.state.participant
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.participant.slug
      if (doRequest) {
        loadParticipant(this.$route.params.slug).then(res => {
          this.$store.commit('loadParticipant', getParticipantFromApi(res.data))
        })
      }
    }
  }
}
export default Participant
