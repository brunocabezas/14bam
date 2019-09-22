<template>
  <Loader :loading="loadingData">
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
          <p>{{ exposition.startDate }} {{exposition.endDate && 'al'}} {{exposition.endDate}}</p>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/common/Loader'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader
  },
  methods: {
    ...mapActions(['loadExpositions'])
  },
  computed: {
    ...mapGetters({ expositions: 'expositionsByDate' })
  }
})
class ExpositionsGrid extends Vue {
  urls = this.$root.urls

  get loadingData () {
    return this.$store.state.expositions.loading
  }

  mounted () {
    this.loadExpositions()
  }
}
export default ExpositionsGrid
</script>

<style scoped lang="stylus">
@import "../../styles/colors";

.expositionsGrid
  display: flex;
  flex-wrap: wrap;

  .exposition
    padding 0 20px
    flex: 1 1 33.3%;
    margin-bottom 2em
    max-width 33.3%

    .expositionName
      margin: 0 0 5px 0;
      font-size 25px
      a
        text-decoration none
        &:hover
          text-decoration underline

    .expositionText
      p
        color: $black;
        line-height 30px
        font-family "News Cycle", 'sans-serif'
        font-size 25px
        font-weight bold

      *
        margin: 0;
</style>
