
import { Component, Vue } from 'vue-property-decorator'
import { loadExposition } from '../../../../api/client'
import { getExpositionFromApi } from '../../../helpers/apiHelpers'
import Loader from '@/components/common/Loader'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader,
    ExpositionInfoBar
  }
})
class Exposition extends Vue {
  urls = this.$root.urls

  loadingData = false

  get exposition () {
    return this.$store.state.exposition
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.exposition.slug
      if (doRequest) {
        this.loadingData = true
        loadExposition(this.$route.params.slug).then(res => {
          this.$store.commit('loadExposition', getExpositionFromApi(res.data))
          this.loadingData = false
        })
      }
    }
  }
}
export default Exposition
