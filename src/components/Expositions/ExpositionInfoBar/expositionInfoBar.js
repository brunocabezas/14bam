import { Vue, Component } from 'vue-property-decorator'
import { loadExpositions } from '../../../../api/client'
// import Loader from '@/components/common/Loader'
import store from '@/config/store'

@Component({
  store,
  // components: {
  //   Loader
  // },
  props: {
    expoId: {
      default: null,
      type: Number
    },
    expo: {
      default: null,
      type: Object
    }
  }
})
class ExpositionInfoBar extends Vue {
  loadingData = false

  get exposition () {
    return (
      this.expo ||
      this.$store.state.expositions.find(expo => expo.id === this.expoId) ||
      {}
    )
  }

  mounted () {
    this.loadingData = true
    if (Object.keys(this.exposition).length === 0) {
      loadExpositions().then(response => {
        this.$store.commit('loadExpositions', response)
        this.loadingData = false
      })
    }
  }
}
export default ExpositionInfoBar
