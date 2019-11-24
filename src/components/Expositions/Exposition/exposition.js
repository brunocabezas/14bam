import { Component, Vue, Watch } from 'vue-property-decorator'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import Loader from '@/components/common/Loader.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

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
      expositionBySlug: 'expositionBySlug',
      loadingData: 'isLoadingExposition'
    })
  }
})
class Exposition extends Vue {
  urls = this.$root.urls

  @Watch('$route')
  onRouteChanged (route) {
    this.loadExposition({ slug: route.params.slug })
  }

  get exposition () {
    return this.expositionBySlug(this.$route.params.slug)
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.exposition.slug
      if (doRequest) {
        this.loadExposition({ slug: this.$route.params.slug })
      }
    }
  }
}
export default Exposition
