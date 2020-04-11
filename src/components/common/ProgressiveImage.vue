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

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'

@Component({
  components: {
    Loader
  }
})
class ProgressiveImage extends Vue {
  @Prop({ default: '' }) readonly src!: string;
}
export default ProgressiveImage
</script>

<style lang="stylus">
.progressive-background
.progressive-background-image
.imageLoaderContainer
  position relative
  height 300px !important

  .progressive-background-placeholder
    background-position center center !important
    background-size contain

  .loaderContainer
    top: calc((300px / 2) - 13px);

</style>
