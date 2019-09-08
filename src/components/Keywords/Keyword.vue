<template>
  <div class="keyword">
    <h1>Palabra clave: <i>{{keyword.name}}</i></h1>
    <Loader :loading="loadingData">
      <h3 v-if="keyword.participants.length>0">
        {{keyword.participants.length}} participante(s) relacionado(s)
      </h3>
      <ParticpantsGrid :participantsProps="keyword.participants" />
    </Loader>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { loadParticipants } from '../../../api/client'
import { getKeywordsFromParticipants } from '@/helpers/apiHelpers'
import Loader from '@/components/common/Loader'
import ParticpantsGrid from '@/components/Participants/ParticipantsGrid'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader,
    ParticpantsGrid
  }
})
class Keyword extends Vue {
  loadingData = false

  get keyword () {
    const noStoreData = this.$store.state.keywords.length === 0
    // Using route paraments to set name
    const defaultKeyword = {
      name: this.$route.params.slug || '', participants: []
    }
    if (noStoreData) {
      return { ...defaultKeyword }
    } else {
      return this.$store.state.keywords
        .find(key => key.name === this.$route.params.slug) || { ...defaultKeyword }
    }
  }

  mounted () {
    this.loadingData = true
    loadParticipants().then((response) => {
      this.$store.commit('loadParticipants', response)
      this.$store.commit('loadKeywords', getKeywordsFromParticipants(response))
      this.loadingData = false
    })
  }
}
export default Keyword
</script>
