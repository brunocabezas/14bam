import { Component, Vue, Watch } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import urls, { AppUrls } from '@/config/urls'
import { SingleParticipant } from '@/config/types/types'
import { Route } from 'vue-router'

@Component({
  store,
  components: {
    Carousel,
    ExpositionInfoBar,
    Loader
  },
  methods: {
    ...mapActions(['loadParticipant'])
  },
  computed: {
    ...mapGetters({
      participant: 'participant',
      isLoading: 'isLoadingParticipant'
    })
  }
})
class ParticipantComponent extends Vue {
  urls: AppUrls = urls
  // Actions
  loadParticipant!: (slug: string) => void
  // Computed
  participant!: SingleParticipant
  isLoading!: boolean
  participantsNotFetched!: boolean

  @Watch('$route')
  onRouteChanged (route: Route) {
    // console.log(route)
    this.loadParticipant(route.params.slug)
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.participant.slug
      if (doRequest) {
        this.loadParticipant(this.$route.params.slug)
      }
    }
  }

  get expositionSlug () {
    return (this.participant.expo && this.participant.expo.post_name) || ''
  }
}
export default ParticipantComponent
