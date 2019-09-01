
import { Component, Vue } from 'vue-property-decorator'
import { loadExposition } from '../../../../api/client'
import { getExpositionFromApi } from '../../../helpers/apiHelpers'
import { isEmpty } from '../../../helpers/objectsHelpers'
import store from '@/config/store'

@Component({
  store
})
class Exposition extends Vue {
  get exposition () {
    const { exposition, expositions } = this.$store.state
    const unvalidExposition = isEmpty(exposition) || exposition.id === -1

    if (unvalidExposition && expositions.length > 0) {
      const isOnState = expositions
        .find(expo => expo.slug === this.$route.params.slug)

      // If item is on state, retrieving it from there
      if (isOnState) {
        return isOnState
      }
    }
    return exposition
  }

  mounted () {
    if (this.$route.params.slug) {
      const unvalidExposition = isEmpty(this.exposition) ||
        this.exposition.id === -1 ||
        this.exposition.slug !== this.$route.paramas.slug
      if (unvalidExposition) {
        loadExposition(this.$route.params.slug).then(res => {
          this.$store.commit('loadExposition', getExpositionFromApi(res.data))
        })
      }
    }
  }
}
export default Exposition
