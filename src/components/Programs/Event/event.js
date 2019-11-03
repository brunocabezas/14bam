
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
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
