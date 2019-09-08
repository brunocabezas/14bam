<template>
  <div class="expositionsGrid">
    <div
      class="exposition"
      v-for="exposition in expositions"
      v-bind:key="exposition.name"
    >
      <h3 class="expositionName">
        <router-link :to="urls.exposition(exposition.slug)">
          {{ exposition.name }}
        </router-link>
      </h3>
      <div class="expositionText">
        <p>{{ exposition.place }}</p>
        <p>{{ exposition.hour }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { getExpositionsFromApi } from '@/helpers/apiHelpers'
import { loadExpositions } from '../../../api/client'
import store from '@/config/store'

@Component({
  store
})
class ExpositionsGrid extends Vue {
  urls = this.$root.urls

  get expositions () {
    return this.$store.state.expositions
  }

  mounted () {
    loadExpositions().then((response) => {
      this.$store.commit('loadExpositions', getExpositionsFromApi(response.data))
    })
  }
}
export default ExpositionsGrid
</script>

<style scoped lang="stylus">
.expositionsGrid
  display: flex;
  flex-wrap: wrap;

  .exposition
    flex: 1 1 33.3%;
    margin-bottom 1.5em

    .expositionName
      margin: 0 0 5px 0;
      font-size 25px

    .expositionText
      p
        color: $black;
        font-family "News Cycle", 'sans-serif'
        font-size 25px
        font-weight bold

      *
        margin: 0;
</style>
