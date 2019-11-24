import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VueTypes from 'vue-types'
import { videoPlayer } from 'vue-video-player'

@Component({
  components: {
    videoPlayer
  },
  props: {
    url: VueTypes.string.def(''),
    bannerUrl: VueTypes.string.def('')
  }
})
class VideoPlayer extends Vue {
  loading = false

  volumeIconName = 'volume-mute'
  toggleAudioTitle = 'Subir Volumen'

  get player () {
    return this.$refs.videoPlayer && this.$refs.videoPlayer.player
  }

  get volumeIcon () {
    return this.volumeIconName
  }

  get playerOptions () {
    return {
      language: 'es',
      autoplay: true,
      muted: true,
      preload: 'auto',
      responsive: true,
      crossOrigin: 'Anonymous',
      height: '100%',
      width: '100%',
      sources: this.url
        ? [
          {
            withCredentials: true,
            type: 'video/mp4',
            src:
                'http://www.bienaldeartesmediales.cl/14/wp-content/themes/14th-bam-theme/assets/14_bienal_trailer.mp4'
          }
        ]
        : []
    }
  }

  toggleAudio () {
    const isMuted = this.player.muted()
    this.player.muted(!isMuted)
    this.volumeIconName = isMuted ? 'volume-up' : 'volume-mute'
    this.toggleAudioTitle = isMuted ? 'Silencio' : 'Subir volumen'
  }

  mounted () {
    console.log('this is current player instance object', this.player)
  }
}
export default VideoPlayer
