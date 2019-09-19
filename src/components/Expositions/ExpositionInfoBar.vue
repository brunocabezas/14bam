<template>
  <ul v-if="Object.keys(this.exposition).length > 0" class="expositionInfoBar">
    <li class="expositionInfoBarItem">
      {{ exposition.place }}
    </li>
    <li
      v-if="exposition.startDate && exposition.endDate"
      class="expositionInfoBarItem"
    >
      {{ exposition.startDate }}
      <br/>
      {{ exposition.endDate }}
    </li>
    <li v-if="exposition.hour" class="expositionInfoBarItem">
      {{ exposition.hour }}
    </li>
    <li v-if="exposition.hour2" class="expositionInfoBarItem">
      {{ exposition.hour2 }}
    </li>
    <li
      v-if="exposition.address || exposition.web"
      class="expositionInfoBarItem"
    >
      <span>
        {{ exposition.address }}
        <br/>
        <a target="_blank" class="link" :href="exposition.web">{{
          exposition.webText || exposition.web
        }}</a>
      </span>
    </li>
  </ul>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { loadExpositions } from '../../../api/client'
// import Loader from '@/components/common/Loader'
import store from '@/config/store'

@Component({
  store,
  // components: {
  //   Loader
  // },
  props: {
    expoId: {
      default: null,
      type: Number
    },
    expo: {
      default: null,
      type: Object
    }
  }
})
class ExpositionInfoBar extends Vue {
  loadingData = false

  get exposition () {
    return this.expo || this.$store.state.expositions
      .find(expo => expo.id === this.expoId) ||
        {}
  }

  mounted () {
    this.loadingData = true
    if (Object.keys(this.exposition).length === 0) {
      loadExpositions().then((response) => {
        this.$store.commit('loadExpositions', response)
        this.loadingData = false
      })
    }
  }
}
export default ExpositionInfoBar
</script>

<style scoped lang="stylus">
@import "../../styles/colors";

.expositionInfoBar
  display flex
  padding 0
  border-top 3px solid $black
  border-bottom 3px solid $black
  vertical-align center

  .expositionInfoBarItem
    flex 1
    padding 0.8em 10px
    font-size 22px
    font-weight bold
    text-align center
    display flex
    align-items center
    justify-content center

    .link
      font-family 'News Cycle', sans-serif

    &:first-child
      text-align left
      padding-left 0

    &:last-child
      text-align right
      padding-right 0
      flex-direction column
      justify-content center

</style>
