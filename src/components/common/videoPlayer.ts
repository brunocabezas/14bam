import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { videoPlayer } from 'vue-video-player'

interface PlayerOptions {
  language: string;
  autoplay: boolean;
  muted: boolean;
  preload: string;
  responsive: boolean;
  crossOrigin: string;
  height: string;
  width: string;
  sources: VideoSource[];
}

interface VideoSource {
  withCredentials: boolean;
  type: string;
  src: string
}

@Component({
  components: {
    videoPlayer
  }
})
class VideoPlayer extends Vue {
  @Prop({ default: '' }) readonly url!: string
  @Prop({ default: '' }) readonly bannerUrl!: string

  loading : boolean = false

  volumeIconName = 'volume-mute'
  toggleAudioTitle = 'Subir Volumen'

  get player () {
    return this.$refs.videoPlayer && (this.$refs.videoPlayer as any).player
  }

  get volumeIcon () {
    return this.volumeIconName
  }

  get playerOptions () : PlayerOptions {
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

  toggleAudio () : void {
    const isMuted = this.player.muted()
    this.player.muted(!isMuted)
    this.volumeIconName = isMuted ? 'volume-up' : 'volume-mute'
    this.toggleAudioTitle = isMuted ? 'Silencio' : 'Subir volumen'
  }

  mounted () {
    // console.log('this is current player instance object', this.player)
  }
}
export default VideoPlayer
