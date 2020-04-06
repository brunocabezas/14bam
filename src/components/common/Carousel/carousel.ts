import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'
import LightBox from 'vue-image-lightbox'
import { Carousel as VueCarousel, Slide } from 'vue-carousel'
import ProgressiveImage from '@/components/common/ProgressiveImage.vue'
import Icon from '../../../../node_modules/vue-awesome/components/Icon.vue'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

type Images = CarouselImage[]

interface CarouselImage {
  src: string,
  thumb: string
}

@Component({
  components: {
    VueCarousel,
    LightBox,
    Loader,
    Slide,
    ProgressiveImage,
    'v-icon': Icon
  }
})

class Carousel extends Vue {
  @Prop() public className: string = '';
  @Prop() public images: string[] = [];

  currentImage: number = 0

  get lightBoxData (): Images {
    if (!this.images) return []
    return this.images.map(img => ({ src: img, thumb: img }))
  }

  goToNextItem (): void {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0
    } else {
      this.currentImage = this.currentImage + 1
    }
  }

  goToPrevItem (): void {
    if (this.currentImage === 0) {
      this.currentImage = this.images.length - 1
    } else {
      this.currentImage = this.currentImage - 1
    }
  }

  openLightbox (index: number) {
    (this.$refs.lightbox as any).showImage(index)
  }
}
export default Carousel
