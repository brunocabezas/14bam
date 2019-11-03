import { Vue, Component } from 'vue-property-decorator'
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
  computed: {
    ...mapGetters({
      loading: 'isLoadingParticipants',
      expositionBySlug: 'expositionBySlug',
      expositionGalleryBySlug: 'expositionGalleryBySlug',
      participantsNotFetched: 'participantsNotFetched'
    })
  },
  props: {
    slug: String
  },
  methods: {
    ...mapActions(['loadParticipants'])
  }
})
class ExpositionGallery extends Vue {
  get images () {
    return this.expositionGalleryBySlug(this.slug)
  }

  get exposition () {
    return this.expositionBySlug(this.slug)
  }

  mounted () {
    if (this.participantsNotFetched) {
      this.loadParticipants()
    }
  }
}
export default ExpositionGallery
