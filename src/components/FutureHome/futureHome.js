
import { Component, Vue } from 'vue-property-decorator'
import { loadSponsors, loadVideos, loadExpositions } from '../../../api/client'
import VideoPlayer from '../Home/VideoPlayer.vue'
import store from '@/config/store'
import urls from '@/config/urls'
// import { getExpositionsFromApi, getSponsorsFromApi } from '@/helpers/apiHelpers'
import { getSponsorsFromApi, getExpositionsFromApi } from '@/helpers/apiHelpers'

@Component({
  components: {
    VideoPlayer
  },
  store
})
class FutureHome extends Vue {
  // places : Array =  '[]';
  // programs : Array =  '[]';
  videos = [];
  video = {
    id: 0,
    url: ''
  };

  get sponsors () {
    return this.$store.state.sponsors
  }

  get expositions () {
    return this.$store.state.expositions
  }

  getExpoLink (expoName) {
    return urls.exposition(expoName)
  }

  mounted () {
    loadSponsors().then((response) => {
      this.$store.commit('loadSponsors', getSponsorsFromApi(response.data))
    })
    loadExpositions().then((response) => {
      console.log(response.data)
      this.$store.commit('loadExpositions', getExpositionsFromApi(response.data))
    })
    loadVideos().then((response) => {
      const { data } = response
      this.videos = data
      if (data[0]) {
        this.video = {
          id: data[0].id,
          url: data[0].acf_fields && data[0].acf_fields.url
        }
      }
    }).catch(res => console.log('loadVideosError', res))
  }
}
export default FutureHome
