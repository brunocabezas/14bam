import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import urls, { AppUrls } from '@/config/urls'
import { Program } from '@/config/types/types'

@Component({
  store,
  components: {
    Loader,
    Carousel
  },
  methods: {
    ...mapActions(['loadProgram', 'loadEvents'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingProgram',
      isLoadingEvents: 'isLoadingEvents',
      dataNotFetched: 'programNotFetched',
      eventsNotFetched: 'eventsNotFetched',
      program: 'programFromState'
    })
  }
})
// Also displays an event
class ProgramComponent extends Vue {
  urls: AppUrls = urls
  // Actions
  loadProgram!: (programSlug: string) => void
  loadEvents!: () => void
  // Computed
  isLoading!: boolean
  isLoadingEvents!: boolean
  dataNotFetched!: boolean
  eventsNotFetched!: boolean
  program!: Program

  get images (): string[] {
    // Getting array of urls from program
    return (
      (this.program &&
        this.program.images &&
        this.program.images.map(img => img.url)) ||
      []
    )
  }

  get displayActivitiesInformation (): boolean {
    return (
      this.program &&
      this.program.mainProgram &&
      this.program.mainProgram.post_name.includes('magnet')
    )
  }

  mounted () {
    const skipFetch : boolean =
      !this.dataNotFetched && this.program.slug === this.$route.params.slug
    if (this.$route.params.slug && !skipFetch) {
      this.loadProgram(this.$route.params.slug)
    }

    if (this.eventsNotFetched) {
      this.loadEvents()
    }
  }
}
export default ProgramComponent
