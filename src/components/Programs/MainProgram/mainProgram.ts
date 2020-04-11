import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import { mapActions, mapGetters } from 'vuex'
import { Program, MainProgram } from '@/config/types/types'
import urls, { AppUrls } from '@/config/urls'

@Component({
  store,
  components: {
    Loader,
    Carousel
  },
  methods: {
    ...mapActions(['loadMainPrograms'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingMainPrograms',
      dataNotFetched: 'mainProgramsNotFetched',
      getProgramBySlug: 'mainProgramBySlug'
    })
  }
})

// Also displays an event
class MainProgramComponent extends Vue {
  urls: AppUrls = urls
  // Actions
  loadMainPrograms!: () => void
  // Computed
  getProgramBySlug!: (eventSlug: string) => MainProgram
  isLoading!: boolean
  dataNotFetched!: boolean

  get program (): MainProgram {
    return this.getProgramBySlug(this.$route.params.slug)
  }

  get displayActivities (): boolean {
    return !!(
      this.program &&
      this.program.name &&
      this.program.name.toLowerCase().includes('escuela')
    )
  }

  get images (): string[] {
    // Getting array of urls from program
    return (
      (this.program &&
        this.program.images &&
        this.program.images.map(img => img.url)) ||
      []
    )
  }

  mounted () {
    if (this.$route.params.slug && this.dataNotFetched) {
      this.loadMainPrograms()
    }
  }
}
export default MainProgramComponent
