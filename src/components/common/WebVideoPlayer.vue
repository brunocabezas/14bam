<template>
  <div class="WebvideoPlayer">
    <Loader :loading="loading"></Loader>
    <vimeo-player
      v-if="url && isVimeo"
      ref="player"
      :playerOptions="playerOpts"
      :video-id="getVideoId()"
      player-width="100%"
      @ready="onPlayerReady"
    >
    </vimeo-player>
    <youtube
      :player-vars="playerVars"
      @ready="onPlayerReady"
      v-if="url && !isVimeo"
      min-height="100%"
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
import Loader from '@/components/common/Loader.vue'
import { getVimeoId, getYoutubeId } from '@/helpers/urlHelpers'
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)

@Component({
  components: {
    vueVimeoPlayer,
    Loader
  },
  data () {
    return {
      isVimeo: false,
      playerOpts: {
        minHeight: 300
      }
    }
  }
})
class WebVideoPlayer extends Vue {
  loading = false
  playerVars = {
    controls: 0,
    autoplay: 1
  }

  @Prop({ default: '' })
  url

  @Watch('url')
  onUrlChanged (value, oldValue) {
    this.isVimeo = value.includes('vimeo')
  }

  get player () {
    return this.$refs.youtube.player
  }

  onPlayerReady () {
    this.loading = false
  }

  getVideoId () {
    return this.isVimeo ? getVimeoId(this.url) : getYoutubeId(this.url)
  }

  mounted () {
    this.loading = true
    this.isVimeo = this.url.includes('vimeo')
  }
}
export default WebVideoPlayer
</script>

<style lang="stylus">
.WebvideoPlayer
  width 100%
  min-height 300px
  position relative
  iframe
    width 100%
    min-height 100%
</style>
