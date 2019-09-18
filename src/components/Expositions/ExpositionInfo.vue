<template>
  <ul v-if="Object.keys(this.exposition).length > 0" class="expositionInfo">
    <li class="expositionInfoItem">
      {{ exposition.place }}
    </li>
    <li
      v-if="exposition.startDate && exposition.endDate"
      class="expositionInfoItem"
    >
      {{ exposition.startDate }}
      <br/>
      {{ exposition.endDate }}
    </li>
    <li v-if="exposition.hour" class="expositionInfoItem">
      {{ exposition.hour }}
    </li>
    <li v-if="exposition.hour2" class="expositionInfoItem">
      {{ exposition.hour2 }}
    </li>
    <li
      v-if="exposition.address || exposition.web"
      class="expositionInfoItem"
    >
      <span>
        {{ exposition.address }}
        <br/>
        <a target="_blank" class="link" :href="exposition.web">{{
          exposition.web
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
class ExpositionInfo extends Vue {
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
export default ExpositionInfo
</script>

<style scoped lang="stylus">
@import "../../styles/colors";

.expositionInfo
  display flex
  padding 0 1em
  border-top 3px solid $black
  border-bottom 3px solid $black
  vertical-align center

  .expositionInfoItem
    flex 1
    padding 0.8em 0
    font-size 25px
    font-weight bold
    text-align center
    display flex
    align-items center
    justify-content center

    .link
      font-family 'News Cycle', sans-serif

    &:first-child
      text-align left

    &:last-child
      text-align right
      flex-direction column
      justify-content center

</style>
