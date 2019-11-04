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
    preload: 'auto',
    responsive: true,
    crossOrigin: 'Anonymous',
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

  get player () {
    return this.$refs.videoPlayer.player
  }

  // player is ready
  playerReadied (player) {
    player
      .play()
      .then(res => console.log(res))
      .catch((err, as) => console.log(err, as, err.message))
  }

  // // player is ready
  // mounted () {
  //   // console.log('this is current player instance object', this.player)
  //   setTimeout(() => {
  //     console.log('dynamic change options', this.player)
  //     // change src
  //     // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
  //     // change item
  //     // this.$set(this.playerOptions.sources, 0, {
  //     //   type: "video/mp4",
  //     //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
  //     // })
  //     // change array
  //     // this.playerOptions.sources = [{
  //     //   type: "video/mp4",
  //     //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
  //     // }]
  //     this.player.play()
  //   }, 5000)
  // }
}
export default VideoPlayer
