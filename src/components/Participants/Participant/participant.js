
import { Component, Vue } from 'vue-property-decorator'
import { loadParticipant } from '../../../../api/client'
import { getParticipantFromApi } from '../../../helpers/apiHelpers'
import Carousel from '@/components/common/Carousel.vue'
import Loader from '@/components/common/Loader.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import store from '@/config/store'

@Component({
  store,
  components: {
    Carousel,
    ExpositionInfoBar,
    Loader
  }
})
class Participant extends Vue {
  urls = this.$root.urls

  loadingData = false

  get participant () {
    return this.$store.state.participant
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.participant.slug
      if (doRequest) {
        this.loadingData = true
        loadParticipant(this.$route.params.slug).then(res => {
          this.$store.commit('loadParticipant', getParticipantFromApi(res.data))
          this.loadingData = false
        })
      }
    }
  }
}
export default Participant
