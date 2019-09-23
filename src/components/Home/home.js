
import { Component, Vue } from 'vue-property-decorator'
import { loadVideos } from '../../../api/client'
import VideoPlayer from './VideoPlayer.vue'
import Sponsors from '@/components/FutureHome/Sponsors/Sponsors.vue'
import store from '@/config/store'

@Component({
  components: {
    VideoPlayer,
    Sponsors
  },
  store
})
class Home extends Vue {
  videos = [];
  video = {
    id: 0,
    url: ''
  };

  mounted () {
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
export default Home
