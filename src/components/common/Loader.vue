<template>
  <div v-bind:class="{
    loaderContainer: true,
    'loaderContainer--loading': loading,
  }">
    <bounce-loader
      :loading="loading"
      :color="color"
      :size="size">
    </bounce-loader>
    <slot v-if="!loading" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

@Component({
  components: {
    BounceLoader
  }
})
class Loader extends Vue {
  @Prop({ default: '#26305f' }) readonly color!: string
  @Prop({ default: false }) readonly loading!: boolean
  @Prop({ default: '30px' }) readonly size!: string
}
export default Loader
</script>

<style scoped lang="stylus">
.loaderContainer
  position initial
  &--loading
    position absolute
    margin 0 auto
    top 50%
    left 50%

</style>
