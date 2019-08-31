<template>
  <div class="videoPlayer">
    <!-- <vimeo-player v-if="isVimeo" ref="player" :video-id="getVideoId()" player-height="100%">
    </vimeo-player>
    <youtube v-if="!isVimeo" height="100%" width="100%" :video-id="getVideoId()" ref="youtube"></youtube> -->
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
// import vueVimeoPlayer from 'vue-vimeo-player';
// import VueYoutube from 'vue-youtube';
// Vue.use(VueYoutube)
// Vue.use(vueVimeoPlayer)

@Component({
  components: {
    // vueVimeoPlayer,
  }
})
class VideoPlayer extends Vue {
  isVimeo = false

 @Prop({ default: '' })
  url

  @Watch('url')
 onPropertyChanged (value, oldValue) {
   this.isVimeo = value.includes('vimeo')
 }

  getVideoId () {
    if (this.isVimeo) {
      return this.url.split('/')[this.url.split('/').length - 1]
    } else {
      return this.url.split('=')[this.url.split('=').length - 1]
    }
  }
}
export default VideoPlayer
</script>

<style lang="stylus" scoped>
.videoPlayer
  width 100%
  // max-width 650px
</style>
