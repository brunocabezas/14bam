import { Component, Vue, Watch } from 'vue-property-decorator'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import Loader from '@/components/common/Loader.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'
import urls, { AppUrls } from '@/config/urls'
import { Route } from 'vue-router'
import { Exposition } from '@/config/types/types'

@Component({
  store,
  components: {
    Carousel,
    ExpositionInfoBar,
    Loader
  },
  methods: {
    ...mapActions(['loadExposition'])
  },
  computed: {
    ...mapGetters({
      getExpositionBySlug: 'expositionBySlug',
      isLoadingData: 'isLoadingExposition'
    })
  }
})
class ExpositionComponent extends Vue {
  urls : AppUrls = urls

  $route!: Route

  // Actions
  loadExposition!: (expositionSlug: string) => void;
  // Computed
  isLoadingData!: boolean;
  getExpositionBySlug!: (expositionSlug: string) => Exposition;

  @Watch('$route')
  onRouteChanged (route: Route) {
    this.loadExposition(route.params.slug)
  }

  get exposition () : Exposition {
    return this.getExpositionBySlug(this.$route.params.slug)
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.exposition.slug
      if (doRequest) {
        this.loadExposition(this.$route.params.slug)
      }
    }
  }
}
export default ExpositionComponent
