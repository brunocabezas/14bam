<template>
  <div class="videoPlayer"> 
    <vimeo-player v-if="isVimeo" ref="player" :video-id="getVideoId()" player-height="100%">
    </vimeo-player>
    <youtube v-if="!isVimeo" height="100%" width="100%" :video-id="getVideoId()" ref="youtube"></youtube>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator"
import vueVimeoPlayer from "vue-vimeo-player";
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)

@Component({
  components: {
    vueVimeoPlayer,
  }
})
export default class VideoPlayer extends Vue {
  isVimeo = false

 @Prop({default: ""})
  url: string

  @Watch("url")
  onPropertyChanged(value: string, oldValue: string) {
    this.isVimeo = value.includes("vimeo");
    // Do stuff with the watcher here.
  }

  getVideoId() {
    if (this.isVimeo) {
      return this.url.split('/')[this.url.split('/').length - 1];
    } else { 
      return this.url.split('=')[this.url.split('=').length - 1];
    }
  }
}
</script>

<style lang="stylus" scoped>
.videoPlayer
  width 100%
  // max-width 650px

</style>