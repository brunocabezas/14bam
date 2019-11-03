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
      programBySlug: 'programBySlug'
    })
  }
})
// Also displays an event
class Program extends Vue {
  urls = this.$root.urls

  get program () {
    return this.programBySlug(this.$route.params.slug)
  }

  get images () {
    console.log(this.program)
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
export default Program
