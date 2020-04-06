import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import urls, { AppUrls } from '@/config/urls'
import { Activities } from '@/config/types/types'
import { shortenMonth } from '@/helpers/dateHelpers'

@Component({
  store,
  filters: {
    shortMonth: shortenMonth
  },
  computed: {
    ...mapGetters({
      events: 'activities',
      isLoading: 'isLoadingActivities',
      activitiesNotFetched: 'activitiesNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadActivities'])
  },
  components: {
    Loader
  }
})
class Agenda extends Vue {
  urls: AppUrls = urls

  loadActivities!: () => void
  // Computed
  activitiesNotFetched!: boolean
  isLoading!: boolean
  events!: Activities

  mounted () {
    if (this.activitiesNotFetched) {
      this.loadActivities()
    }
  }
}
export default Agenda
