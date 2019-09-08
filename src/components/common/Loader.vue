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

<script>
import { Component, Vue } from 'vue-property-decorator'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

@Component({
  components: {
    BounceLoader
  },
  props: {
    color: {
      type: String,
      default: '#26305f'
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '30px'
    }
  }
})
class Loader extends Vue {}
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
