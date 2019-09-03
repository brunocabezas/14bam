
import { Component, Vue } from 'vue-property-decorator'
import { loadExposition } from '../../../../api/client'
import { getExpositionFromApi } from '../../../helpers/apiHelpers'
import store from '@/config/store'

@Component({
  store
})
class Exposition extends Vue {
  urls = this.$root.urls

  get exposition () {
    return this.$store.state.exposition
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.exposition.slug
      if (doRequest) {
        loadExposition(this.$route.params.slug).then(res => {
          this.$store.commit('loadExposition', getExpositionFromApi(res.data))
        })
      }
    }
  }
}
export default Exposition
