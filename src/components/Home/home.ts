import { Component, Vue } from 'vue-property-decorator'
import { getVideos } from '../../../api/client'
import VideoPlayer from '@/components/common/VideoPlayer.vue'
import ExpositionsGrid from '@/components/Expositions/ExpositionsGrid/ExpositionsGrid.vue'
import MainPrograms from '@/components/Programs/MainPrograms/MainPrograms.vue'
import Agenda from '@/components/Home/Agenda/Agenda.vue'
import Map from '@/components/Home/HomeMap/HomeMap.vue'
import Sponsors from '@/components/Home/Sponsors/Sponsors.vue'
import store from '@/config/store'
import urls, { AppUrls } from '@/config/urls'
import { mapGetters } from 'vuex'
import { Page } from '@/config/types/types'
import { WPStaticPageSlug } from '@/config/getters/pages'

type HomeVideo = {
  id: number,
  url: string,
  hasBanner: boolean,
  bannerUrl: string,
}

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
      abstractPage: WPStaticPageSlug.Abstract
    })
  }
})
class Home extends Vue {
  urls : AppUrls = urls;
  video : HomeVideo= {
    id: 0,
    url: '',
    hasBanner: false,
    bannerUrl: ''
  }

  // Computed
  abstractPage!: Page;

  mounted () {
    getVideos()
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
      .catch(res => console.log('getVideosError', res))
  }
}
export default Home
