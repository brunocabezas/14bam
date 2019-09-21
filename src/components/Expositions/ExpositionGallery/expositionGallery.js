import { Vue, Component } from 'vue-property-decorator'
import Carousel from '@/components/common/Carousel.vue'
// import Loader from '@/components/common/Loader'
import store from '@/config/store'
import { loadParticipants } from '../../../../api/client'
import { getKeywordsFromParticipants } from '../../../helpers/apiHelpers'
import { flatten } from '../../../helpers/arrayHelpers'

@Component({
  store,
  components: {
    Carousel
  }
})
class ExpositionGallery extends Vue {
  loading = false

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

  get participants () {
    return this.$store.state.participants
  }

  mounted () {
    this.loading = true
    loadParticipants().then(response => {
      this.$store.commit('loadParticipants', response)
      this.$store.commit('loadKeywords', getKeywordsFromParticipants(response))
      this.loading = false
    })
  }
}
export default ExpositionGallery
