<template>
  <div :class="'carousel ' + className">
    <hr>
    <vue-carousel
      :paginationEnabled="false"
      :perPage="1"
      :navigate-to="currentImage">
      <slide
        v-bind:key="image"
        v-for="image in images">
        <div
          class="carouselImage"
          v-bind:style="{'background-image': `url(${image})` }"></div>
      </slide>
    </vue-carousel>
    <button
      v-if="images.length > 1"
      title="Imagen anterior"
      class="carouselButton carouselButton--prev"
      type="button"
      @click="goToPrevItem">
       <v-icon
        color="white"
        name="chevron-left"
        scale="1.5">
      </v-icon>
    </button>
    <button
      v-if="images.length > 1"
      title="Imagen siguiente"
      class="carouselButton carouselButton--next"
      type="button"
      @click="goToNextItem">
      <v-icon
        color="white"
        name="chevron-right"
        scale="1.5">
      </v-icon>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Carousel as VueCarousel, Slide } from 'vue-carousel'
import Icon from '../../../node_modules/vue-awesome/components/Icon.vue'

@Component({
  components: {
    VueCarousel,
    Slide,
    'v-icon': Icon
  },
  props: {
    images: {
      type: Array,
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
</script>

<style lang="stylus" scoped>
.carousel
  position relative
  display flex
  align-items center
  justify-content center
  .carouselButton--next
    right 0
  .carouselButton--prev
    left 0
  .carouselButton
    background-color transparent
    border none
    position absolute
    cursor pointer

  .carouselImage
    background-position center center
    background-size cover
    background-repeat no-repeat

</style>

<style lang="stylus">
.VueCarousel
  height 100%
  width 100%
  .VueCarousel-wrapper,
  .carouselImage,
  .VueCarousel-inner
    height 100% !important
    width 100%
</style>
