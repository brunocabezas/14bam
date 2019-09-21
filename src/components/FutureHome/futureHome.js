
import { Component, Vue } from 'vue-property-decorator'
import { loadSponsors, loadVideos } from '../../../api/client'
import VideoPlayer from '../Home/VideoPlayer.vue'
import ExpositionsGrid from '@/components/Expositions/ExpositionsGrid.vue'
import MainPrograms from '@/components/Programs/MainPrograms.vue'
import Agenda from '@/components/FutureHome/HomeAgenda/HomeAgenda.vue'
import Map from '@/components/FutureHome/HomeMap/HomeMap.vue'
import store from '@/config/store'
// import { getExpositionsFromApi, getSponsorsFromApi } from '@/helpers/apiHelpers'
import { getSponsorsFromApi } from '@/helpers/apiHelpers'

@Component({
  components: {
    VideoPlayer,
    Agenda,
    ExpositionsGrid,
    Map,
    MainPrograms
  },
  store
})
class FutureHome extends Vue {
  expositions = [];
  videos = [];
  video = {
    id: 0,
    url: ''
  };
  urls = this.$root.urls

  get sponsors () {
    return this.$store.state.sponsors
  }

  mounted () {
    loadSponsors().then((response) => {
      this.$store.commit('loadSponsors', getSponsorsFromApi(response.data))
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
