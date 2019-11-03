<template>
   <progressive-background :placeholder="src" :src="src">
    <div
      v-bind:class="{
        'imageLoaderContainer--loading': visible,
        imageLoaderContainer: true
      }"
      slot="content"
      slot-scope="{ visible }"
    >
      <Loader :loading="visible" />
      <slot></slot>
    </div>
  </progressive-background>
</template>

<script>
import VueTypes from 'vue-types'
import { Component, Vue } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'

@Component({
  components: {
    Loader
  },
  props: {
    src: VueTypes.string.def('')
  }
})
class ProgressiveImage extends Vue {}
export default ProgressiveImage
</script>

<style lang="stylus">
.progressive-background
.progressive-background-image
.imageLoaderContainer
  position relative
  height 300px

  .loaderContainer
    top: calc((300px / 2) - 13px);
</style>
