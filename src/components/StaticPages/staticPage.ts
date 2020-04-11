import { Component, Vue, Prop } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'
import WebVideoPlayer from '@/components/common/WebVideoPlayer.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import { page } from '@/config/state/initialState'
import { Page } from '@/config/types/types'

@Component({
  components: {
    Loader,
    WebVideoPlayer,
    Carousel
  }
})
class StaticPage extends Vue {
  @Prop({ default: false }) readonly isLoading!: boolean
  @Prop({ default: page }) readonly page!: Page

  get hasMedia () : boolean {
    const media = this.page && (this.page.video || this.page.gallery)
    return Array.isArray(media) ? media.length > 0 : !!media
  }
}
export default StaticPage
