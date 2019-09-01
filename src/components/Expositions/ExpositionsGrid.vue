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
import urls from '@/config/urls'
import store from '@/config/store'

@Component({
  store
})
class ExpositionsGrid extends Vue {
  urls = urls

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
    margin-bottom 10px

    .expositionName
      margin: 0 0 5px 0;

    .expositionText
      color: $black;

      *
        margin: 0;
</style>
