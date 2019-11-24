import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'

@Component({
  store,
  components: {
    Loader,
    Carousel
  },
  methods: {
    ...mapActions(['loadProgram', 'loadActivities'])
  },
  computed: {
    ...mapGetters({
      loading: 'isLoadingProgram',
      isLoadingActivitiesData: 'isLoadingActivities',
      dataNotFetched: 'programNotFetched',
      activitiesNotFetched: 'activitiesNotFetched',
      program: 'programFromState'
    })
  }
})
// Also displays an event
class Program extends Vue {
  urls = this.$root.urls

  get images () {
    // Getting array of urls from program
    return (
      (this.program &&
        this.program.images &&
        this.program.images.map(img => img.url)) ||
      []
    )
  }

  get displayActivitiesInformation () {
    return (
      this.program &&
      this.program.mainProgram &&
      this.program.mainProgram.post_name.includes('magnet')
    )
  }

  mounted () {
    const skipFetch =
      !this.dataNotFetched && this.program.slug === this.$route.params.slug
    if (this.$route.params.slug && !skipFetch) {
      this.loadProgram({ slug: this.$route.params.slug })
    }

    if (this.activitiesNotFetched) {
      this.loadActivities()
    }
  }
}
export default Program
