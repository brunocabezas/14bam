import { Vue, Component } from 'vue-property-decorator'
// import Loader from '@/components/common/Loader'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

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
    },
    methods: {
      ...mapActions(['loadExpositions'])
    },
    computed: {
      ...mapGetters({
        expositions: 'expositionsByDate',
        loadingData: 'isLoadingExpositions'
      })
    }
  }
})
class ExpositionInfoBar extends Vue {
  get exposition () {
    return this.expo || this.expositions.find(expo => expo.id === this.expoId)
  }

  mounted () {
    if (Object.keys(this.exposition).length === 0) {
      this.loadExpositions()
    }
  }
}
export default ExpositionInfoBar
