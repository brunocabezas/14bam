<template>
  <div id="app" class="app">
    <Header />
    <div
      v-bind:class="{
        appContent: true,
        page: true,
        'appContent--home': isOnHome
      }"
    >
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Header from '@/components/layout/Header/Header.vue'
import Footer from '@/components/layout/Footer/Footer.vue'
import store from '@/config/store'
import { mapGetters, mapActions } from 'vuex'
import { Route } from 'vue-router'
import { HOME_URL_NAME } from './config/router'

@Component({
  store,
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters({
      pagesNotFetched: 'pagesNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadPages'])
  }
})
class App extends Vue {
  isOnHome : boolean= false

  // Actions
  loadPages!: () => void
  // Computed
  pagesNotFetched!: boolean

  // Lifecycle hook
  mounted () {
    if (this.pagesNotFetched) {
      this.loadPages()
    }

    if (this.$route.name === HOME_URL_NAME) {
      this.isOnHome = true
    }
  }

  @Watch('$route')
  onPropertyChanged (to: Route, from: Route) {
    this.isOnHome = to.name === HOME_URL_NAME
  }
}
export default App
</script>
<style lang="stylus" scoped src="./app.styl"></style>
