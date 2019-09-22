import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/common/Loader'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader
  },
  methods: {
    ...mapActions(['loadExpositions'])
  },
  computed: {
    ...mapGetters({
      expositions: 'expositionsByDate',
      loadingData: 'isLoadingExpositions',
      expositionsNotFetched: 'expositionsNotFetched'
    })
  }
})
class ExpositionsGrid extends Vue {
  urls = this.$root.urls

  mounted () {
    if (this.expositionsNotFetched) {
      this.loadExpositions()
    }
  }
}
export default ExpositionsGrid
