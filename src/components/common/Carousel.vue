<template>
  <div :class="'carousel ' + className">
    <Swiper :urlList="images" ref="mySwiper"></Swiper>
    <button
      title="Imagen anterior"
      class="carouselButton carouselButton--prev"
      type="button"
      @click="goToPrevItem">
       <v-icon
        name="chevron-left"
        scale="1.5">
      </v-icon>
    </button>
    <button
      title="Imagen siguiente"
      class="carouselButton carouselButton--next"
      type="button"
      @click="goToNextItem">
      <v-icon
        name="chevron-right"
        scale="1.5">
      </v-icon>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import 'vue-active-swiper/dist/VueActiveSwiper.css'
import Icon from '../../../node_modules/vue-awesome/components/Icon.vue'
// in ES6 modules
import VueActiveSwiper, { Swiper, SwiperItem } from 'vue-active-swiper'
Vue.use(VueActiveSwiper)

@Component({
  components: {
    Swiper,
    SwiperItem,
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
  goToNextItem () {
    const { activeIndex } = this.$refs.mySwiper
    this.$refs.mySwiper.goto((activeIndex - 1) + 1)
  }

  goToPrevItem () {
    console.log(this.$refs.mySwiper)
    const { activeIndex } = this.$refs.mySwiper
    this.$refs.mySwiper.goto((activeIndex - 1) - 1)
  }
}
export default Carousel
</script>

<style lang="stylus" scoped>
.carousel
  position relative
  display flex
  align-items center
  .carouselButton--next
    right 0
  .carouselButton--prev
    left 0
  .carouselButton
    background-color transparent
    border none
    position absolute
    cursor pointer
</style>
