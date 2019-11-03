import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Loader from '@/components/common/Loader'
import { Carousel as VueCarousel, Slide } from 'vue-carousel'
import Icon from '../../../../node_modules/vue-awesome/components/Icon.vue'

@Component({
  components: {
    VueCarousel,
    Loader,
    Slide,
    'v-icon': Icon
  },
  props: {
    // Array of images urls
    images: {
      type: Array(String),
      default: () => []
    },
    className: {
      type: String,
      default: ''
    }
  }
})
class Carousel extends Vue {
  currentImage = 0

  goToNextItem () {
    if (this.currentImage === (this.images.length - 1)) {
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
}
export default Carousel
