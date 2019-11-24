import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VueTypes from 'vue-types'
import Loader from '@/components/common/Loader'
import LightBox from 'vue-image-lightbox'
import ProgressiveImage from '@/components/common/ProgressiveImage.vue'
import { Carousel as VueCarousel, Slide } from 'vue-carousel'
import Icon from '../../../../node_modules/vue-awesome/components/Icon.vue'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

@Component({
  components: {
    VueCarousel,
    LightBox,
    Loader,
    Slide,
    ProgressiveImage,
    'v-icon': Icon
  },
  props: {
    // Array of image urls
    images: VueTypes.arrayOf(String).def([]),
    className: VueTypes.string.def('')
  }
})
class Carousel extends Vue {
  currentImage = 0

  get lightBoxData () {
    if (!this.images) return []
    return this.images.map(img => ({ src: img, thumb: img }))
  }

  goToNextItem () {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0
    } else {
      this.currentImage = this.currentImage + 1
    }
  }

  goToPrevItem () {
    if (this.currentImage === 0) {
      this.currentImage = this.images.length - 1
    } else {
      this.currentImage = this.currentImage - 1
    }
  }

  openLightbox (index) {
    this.$refs.lightbox.showImage(index)
  }
}
export default Carousel
