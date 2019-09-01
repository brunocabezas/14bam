<template>
  <div class="page">
    <h1 class="pageTitle">Participantes</h1>
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
          <router-link :title="person.name" :to="urls.participant(person.name)">
            {{ person.name }}
          </router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { getParticipantsFromApi } from '@/helpers/apiHelpers'
import { loadParticipants } from '../../../api/client'
import urls from '@/config/urls'
import store from '@/config/store'

@Component({
  store
})
class Participants extends Vue {
  urls = urls

  get participants () {
    return this.$store.state.participants
  }

  mounted () {
    loadParticipants().then((response) => {
      this.$store.commit('loadParticipants', getParticipantsFromApi(response.data))
    })
  }
}
export default Participants
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
      z-index 9
</style>
