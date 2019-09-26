import { Component, Vue, Watch } from 'vue-property-decorator'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  components: {
    Carousel,
    Loader
  },
  methods: {
    ...mapActions(['loadParticipant'])
  },
  computed: {
    ...mapGetters({
      participant: 'participant',
      loadingData: 'isLoadingParticipant'
    })
  }
})
class Participant extends Vue {
  urls = this.$root.urls

  @Watch('$route')
  onRouteChanged (route) {
    // const { params } = route
    console.log(route)
    this.loadParticipant({ slug: route.params.slug })
    // this.isVimeo = value.includes('vimeo')
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.participant.slug
      if (doRequest) {
        // this.loadingData = true
        this.loadParticipant({ slug: this.$route.params.slug })
      }
    }
  }
}
export default Participant
