import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/common/Loader.vue'
import { Expositions } from '@/config/types/types'
import urls, { AppUrls } from '@/config/urls.ts'
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
      isLoadingData: 'isLoadingExpositions',
      expositionsNotFetched: 'expositionsNotFetched'
    })
  }
})
class ExpositionsGrid extends Vue {
  urls : AppUrls = urls

  // Methods
  loadExpositions!: () => void;
  // Computed
  expositionsNotFetched!: boolean;
  isLoadingData!: boolean;
  expositions!: Expositions;

  mounted () {
    if (this.expositionsNotFetched) {
      this.loadExpositions()
    }
  }
}
export default ExpositionsGrid
