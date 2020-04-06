<template>
  <div class="WebVideoPlayer">
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

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueYoutube from 'vue-youtube'
import Loader from '@/components/common/Loader.vue'
import { getVimeoId, getYoutubeId } from '@/helpers/urlHelpers'
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)

interface WebVideoPlayerVariables{
  controls: number,
  autoplay: number
}

interface WebVideoPlayerOptions {
  minHeight: number,
}

interface WebVideoStat {
  isVimeo: false
}

@Component({
  components: {
    vueVimeoPlayer,
    Loader
  }
})
class WebVideoPlayer extends Vue {
  loading : boolean = false
  isVimeo : boolean = false

  playerOpts : WebVideoPlayerOptions = {
    minHeight: 300
  }

  playerVars : WebVideoPlayerVariables = {
    controls: 0,
    autoplay: 1
  }

  @Prop({ default: '' }) readonly url!: string;

  @Watch('url')
  onUrlChanged (value : string, oldValue: string) {
    this.isVimeo = value.includes('vimeo')
  }

  get player () {
    return (this.$refs.youtube as any).player
  }

  onPlayerReady () {
    this.loading = false
  }

  getVideoId () : string {
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
.WebVideoPlayer
  width 100%
  min-height 300px
  position relative
  iframe
    width 100%
    min-height 100%
</style>
