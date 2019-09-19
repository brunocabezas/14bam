<template>
  <div class="videoPlayer">

    <vimeo-player
      v-if="url && isVimeo"
      ref="player"
      :video-id="getVideoId()"
      player-width="100%"
      player-height="100%">
    </vimeo-player>
    <youtube
      v-if="url && !isVimeo"
      height="100%"
      width="100%"
      :video-id="getVideoId()"
      ref="youtube">
    </youtube>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueYoutube from 'vue-youtube'
import { getVimeoId, getYoutubeId } from '@/helpers/urlHelpers'
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)

@Component({
  components: {
    vueVimeoPlayer
  },
  data () {
    return { isVimeo: false }
  }
})
class VideoPlayer extends Vue {
  @Prop({ default: '' })
  url

  @Watch('url')
  onPropertyChanged (value, oldValue) {
    this.isVimeo = value.includes('vimeo')
  }

  getVideoId () {
    return this.isVimeo ? getVimeoId(this.url) : getYoutubeId(this.url)
  }
}
export default VideoPlayer
</script>

<style lang="stylus" scoped>
.videoPlayer
  width 100%
  // max-width 650px
</style>
