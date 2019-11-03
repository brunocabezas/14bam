<template>
  <Loader :loading="isLoading">
    <h1 v-if="page && !hasMedia" class="pageTitle">{{page.title.rendered}}</h1>
    <div v-if="page && !hasMedia" class="staticPageText" v-html="page.content.rendered"></div>
    <div v-if="hasMedia" class="pageLayout">
      <div class="pageLeft">
        <Gallery v-if="page.gallery && page.gallery.length > 0" :images="page.gallery" />
        <VideoPlayer v-else-if="page.video" :url="page.video" />
      </div>
      <div class="pageRight">
        <h1 class="pageTitle">{{page.title.rendered}}</h1>
        <div class="staticPageText" v-html="page.content.rendered"></div>
      </div>
    </div>
  </Loader>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'
import VideoPlayer from '@/components/Home/VideoPlayer.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'

@Component({
  props: {
    page: {
      type: Object,
      default: { title: '', gallery: [], video: '', content: { rendered: '' } }
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Loader,
    VideoPlayer,
    Gallery: Carousel
  }
})

class StaticPage extends Vue {
  get hasMedia () {
    return this.page && (this.page.video || this.page.gallery)
  }
}
export default StaticPage
</script>
