<template>
  <Loader :loading="loadingData">
    <div class="twoPrograms">
      <div v-bind:key="program.id" v-for="program in programs" class="program">
        <h2 class="programTitle">
          <router-link :to="urls.program(program.slug)">{{
            program.name
          }}</router-link>
        </h2>
        <ul class="programEventList">
          <li
            class="programEvent"
            v-bind:key="program.id"
            v-for="program in program.events"
          >
            <router-link
              class="programEventLink"
              :title="program.post_title"
              :to="urls.event(program.post_name)"
            >
              {{ program.post_title }}
            </router-link>
          </li>
        </ul>
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

  get programs () {
    return this.$store.state.programs
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
  display: flex;
  padding: 15px;

  .program
    flex: 1 1 50%;

    .programTitle
      text-decoration: underline;
      font-size 30px

    .programEventList
      padding: 0;

      .programEvent
        color: $white;
        font-size: 26px;
        &:hover
          text-decoration underline

      .programEventLink
        color: $white;
        font-size: 26px;
        text-decoration: none;
</style>
