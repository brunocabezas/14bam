import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VueTypes from 'vue-types'
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
    // Array of image urls
    images: VueTypes.arrayOf(String).def([]),
    className: VueTypes.string.def('')
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
