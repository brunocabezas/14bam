import { Vue, Component } from 'vue-property-decorator'
import Carousel from '@/components/common/Carousel.vue'
import store from '@/config/store'
import { flatten } from '../../../helpers/arrayHelpers'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  components: {
    Carousel
  },
  computed: {
    ...mapGetters({
      loading: 'isLoadingParticipants',
      participants: 'participants',
      participantsNotFetched: 'participantsNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadParticipants'])
  }
})
class ExpositionGallery extends Vue {
  // TODO add to getters
  get images () {
    // Array of ids
    const expositionArtists = this.$store.state.exposition.artists.map(
      artist => artist.ID
    )

    const artistsImages = this.$store.state.participants
      .filter(artist => expositionArtists.includes(artist.id))
      .map(artist => artist.images)

    // returning array of urls
    return flatten(artistsImages).map(img => img.url)
  }

  mounted () {
    if (this.participantsNotFetched) {
      this.loadParticipants()
    }
  }
}
export default ExpositionGallery
