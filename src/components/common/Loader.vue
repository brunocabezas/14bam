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
  @Prop() public color: string = '#26305f';
  @Prop() public loading: boolean = false;
  @Prop() public size: string = '30px';
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
