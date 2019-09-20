<template>
  <Loader :loading="loadingData">
    <div class="twoPrograms">
      <div>
        <h2 class="programTitle">
          <router-link :to="urls.program(firstProgram.slug)">{{
            firstProgram.name
          }}</router-link>
        </h2>
        <p class="programAbstract" v-html="firstProgram.shortDescription"></p>
      </div>
      <div style="width:300px">
        <!-- <video
          width="300"
          height="600"
          name="Video Name"
          src="@/assets/programsGif.mov">
        </video> -->
      </div>
      <div>
        <h2 class="programTitle">
          <router-link :to="urls.program(secondProgram.slug)">{{
            secondProgram.name
          }}</router-link>
        </h2>
        <p class="programAbstract" v-html="secondProgram.shortDescription"></p>
      </div>
    </div>
  </Loader>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { loadPrograms } from '../../../api/client'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader
  },
  data () {
    return { loading: false }
  }
})
class Programs extends Vue {
  // programs : Array =  '[]'
  loadingData = false

  get firstProgram () {
    return this.$store.state.programs[0] || {}
  }

  get secondProgram () {
    return this.$store.state.programs[1] || {}
  }

  urls = this.$root.urls

  mounted () {
    this.loadingData = true
    loadPrograms().then(res => {
      this.$store.commit('loadPrograms', res)
      this.loadingData = false
    })
  }
}
export default Programs
</script>
<style scoped lang="stylus">
@import '../../styles/colors';

.twoPrograms
  display: inline-flex;
  padding: 15px;

  .programTitle
    text-decoration: underline;
    a
      font-size 32px

  .programAbstract
    text-align left

  // .programEventList
  //   padding: 0;

  //   .programEvent
  //     color: $white;
  //     font-size: 26px;
  //     &:hover
  //       text-decoration underline

  //   .programEventLink
  //     color: $white;
  //     font-size: 26px;
  //     text-decoration: none;
</style>
