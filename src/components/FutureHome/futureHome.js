import { Component, Vue } from 'vue-property-decorator'
import { loadVideos } from '../../../api/client'
import VideoPlayer from '@/components/common/VideoPlayer.vue'
import ExpositionsGrid from '@/components/Expositions/ExpositionsGrid/ExpositionsGrid.vue'
import MainPrograms from '@/components/Programs/MainPrograms/MainPrograms.vue'
import Agenda from '@/components/FutureHome/Agenda/Agenda.vue'
import Map from '@/components/FutureHome/HomeMap/HomeMap.vue'
import Sponsors from '@/components/FutureHome/Sponsors/Sponsors.vue'
import store from '@/config/store'
import { mapGetters } from 'vuex'

@Component({
  components: {
    VideoPlayer,
    Agenda,
    ExpositionsGrid,
    Map,
    Sponsors,
    MainPrograms
  },
  store,

  computed: {
    ...mapGetters({
      abstractPage: 'abstractPage'
    })
  }
})
class FutureHome extends Vue {
  video = {
    id: 0,
    url: ''
  }
  urls = this.$root.urls

  mounted () {
    loadVideos()
      .then(response => {
        const { data } = response
        // Only using data from the first video
        if (data[0]) {
          this.video = {
            id: data[0].id,
            url: data[0].acf_fields && data[0].acf_fields.url,
            hasBanner: !!(data[0].acf_fields && data[0].acf_fields.banner),
            bannerUrl:
              (data[0].acf_fields &&
                data[0].acf_fields.banner &&
                data[0].acf_fields.banner.url) ||
              ''
          }
        }
      })
      .catch(res => console.log('loadVideosError', res))
  }
}
export default FutureHome
