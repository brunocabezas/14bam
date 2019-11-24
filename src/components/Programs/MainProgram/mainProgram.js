import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import { mapActions, mapGetters } from 'vuex'

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
      loading: 'isLoadingMainPrograms',
      dataNotFetched: 'mainProgramsNotFetched',
      programBySlug: 'mainProgramBySlug'
    })
  }
})
// Also displays an event
class MainProgram extends Vue {
  urls = this.$root.urls

  get program () {
    return this.programBySlug(this.$route.params.slug)
  }

  get displayActivities () {
    return this.program && this.program.name && this.program.name.toLowerCase().includes('escuela')
  }

  get images () {
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
export default MainProgram
