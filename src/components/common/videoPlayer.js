import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VueTypes from 'vue-types'
import { videoPlayer } from 'vue-video-player'

@Component({
  components: {
    videoPlayer
  },
  props: {
    src: VueTypes.string.def('')
  }
})
class VideoPlayer extends Vue {
  loading = false
  playerOptions = {
    language: 'es',
    autoplay: true,
    responsive: true,
    preload: 'auto',
    height: '100%',
    width: '100%',
    sources: [
      {
        type: 'video/mp4',
        src:
          'http://www.bienaldeartesmediales.cl/14/wp-content/themes/14th-bam-theme/assets/14_bienal_trailer.mp4'
      }
    ]
  }
}
export default VideoPlayer
