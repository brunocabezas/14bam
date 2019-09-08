<template>
  <div class="participantsGrid">
    <Loader :loading="loadingData">
      <div class="participants">
        <div
          class="participant"
          v-for="person in participants"
          v-bind:key="person.name"
          v-bind:style="{
            'background-image': person.img ? `url(${person.img})` : 'none'
          }"
        >
          <h3 class="participantName">
            <router-link :title="person.name" :to="urls.participant(person.slug)">
              {{ person.name }}
            </router-link>
          </h3>
        </div>
      </div>
    </Loader>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { loadParticipants } from '../../../api/client'
import { getKeywordsFromParticipants } from '@/helpers/apiHelpers'
import store from '@/config/store'
import Loader from '@/components/common/Loader'

@Component({
  store,
  components: {
    Loader
  },
  props: {
    participantsProps: {
      type: Array,
      default: null
    }
  }
})
class ParticipantsGrid extends Vue {
  urls = this.$root.urls

  loadingData = false

  get participants () {
    return this.participantsProps || this.$store.state.participants
  }

  mounted () {
    if (!this.participantsProps) {
      this.loadingData = true
      loadParticipants().then((response) => {
        this.$store.commit('loadParticipants', response)
        this.$store.commit('loadKeywords', getKeywordsFromParticipants(response))
        this.loadingData = false
      })
    }
  }
}
export default ParticipantsGrid
</script>

<style scoped lang="stylus">
@import '../../styles/colors'

.participants
  margin-top 10px
  display flex
  flex-wrap wrap

  .participant
    min-height 150px
    padding 10px
    display flex
    align-items center
    flex 1 1 20%
    max-width 20%
    margin-bottom 10px
    background-size  0 0
    background-repeat no-repeat
    background-position center center
    transition .2s all
    &:hover
      background-size cover
      background-color darken($purple, 30%)
    .participantName
      opacity 1
</style>
