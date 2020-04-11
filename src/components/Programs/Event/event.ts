
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import WebVideoPlayer from '@/components/common/WebVideoPlayer.vue'
import Loader from '@/components/common/Loader.vue'
import ProgressiveImage from '@/components/common/ProgressiveImage.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'
import urls, { AppUrls } from '@/config/urls'
import { Activity } from '@/config/types/types'

@Component({
  store,
  methods: {
    ...mapActions(['loadEvents'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingEvents',
      dataNotFetched: 'eventsNotFetched',
      getEventBySlug: 'eventBySlug'
    })
  },
  components: {
    Loader,
    ProgressiveImage,
    WebVideoPlayer,
    ExpositionInfoBar
  }
})
class EventComponent extends Vue {
  urls: AppUrls = urls
  // Actions
  loadEvents!: () => void
  // Computed
  getEventBySlug!: (eventSlug: string) => Activity
  isLoading!: boolean
  dataNotFetched!: boolean

  mounted () {
    if (this.dataNotFetched) {
      this.loadEvents()
    }
  }

  get event () : Activity {
    const { slug } = this.$route.params
    return this.getEventBySlug(slug)
  }
}
export default EventComponent
