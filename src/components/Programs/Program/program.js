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
    ...mapActions(['loadProgram'])
  },
  computed: {
    ...mapGetters({
      loading: 'isLoadingProgram',
      dataNotFetched: 'programNotFetched',
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

  mounted () {
    const skipFetch =
      !this.dataNotFetched && this.program.slug === this.$route.params.slug
    if (this.$route.params.slug && !skipFetch) {
      this.loadProgram({ slug: this.$route.params.slug })
    }
  }
}
export default Program
