import { Component, Vue } from 'vue-property-decorator'
import VueTypes from 'vue-types'
import Loader from '@/components/common/Loader.vue'
import WebVideoPlayer from '@/components/common/WebVideoPlayer.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'

@Component({
  props: {
    page: VueTypes.object.def({
      title: '',
      gallery: [],
      video: '',
      content: { rendered: '' }
    }),
    isLoading: VueTypes.bool.def(false)
  },
  components: {
    Loader,
    WebVideoPlayer,
    Carousel
  }
})
class StaticPage extends Vue {
  get hasMedia () {
    const media = this.page && (this.page.video || this.page.gallery)
    return Array.isArray(media) ? media.length > 0 : !!media
  }
}
export default StaticPage
