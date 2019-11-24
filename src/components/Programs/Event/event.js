
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import WebVideoPlayer from '@/components/common/WebVideoPlayer.vue'
import Loader from '@/components/common/Loader.vue'
import ProgressiveImage from '@/components/common/ProgressiveImage.vue'
import ExpositionInfoBar from '@/components/Expositions/ExpositionInfoBar/ExpositionInfoBar.vue'

@Component({
  store,
  methods: {
    ...mapActions(['loadActivities'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingActivities',
      dataNotFetched: 'activitiesNotFetched',
      eventBySlug: 'activityBySlug'
    })
  },
  components: {
    Loader,
    ProgressiveImage,
    WebVideoPlayer,
    ExpositionInfoBar
  }
})
class Event extends Vue {
  urls = this.$root.urls

  mounted () {
    if (this.dataNotFetched) {
      this.loadActivities()
    }
  }

  get event () {
    const { slug } = this.$route.params
    return this.eventBySlug(slug)
  }
}
export default Event
