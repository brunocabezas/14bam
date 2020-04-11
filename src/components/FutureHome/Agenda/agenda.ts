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
      isLoading: 'isLoadingEvents',
      eventsNotFetched: 'eventsNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadEvents'])
  },
  components: {
    Loader
  }
})
class Agenda extends Vue {
  urls: AppUrls = urls

  loadEvents!: () => void
  // Computed
  eventsNotFetched!: boolean
  isLoading!: boolean
  events!: Activities

  mounted () {
    if (this.eventsNotFetched) {
      this.loadEvents()
    }
  }
}
export default Agenda
