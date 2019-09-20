<template>
  <div id="app" class="app">
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Mono:500,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.goo/gleapis.com/css?family=News+Cycle:400,700&display=swap"
      rel="stylesheet"
    />
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

<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import Header from '@/components/layout/Header/Header.vue'
import Footer from '@/components/layout/Footer/Footer.vue'
// import urls from '@/config/urls'
// import { loadPages, loadPosts } from '../api/client.js'

@Component({
  components: {
    Header,
    Footer
  }
})
class App extends Vue {
  // Header and footer are hidden on temporaryHome
  isOnHome = false

  // Lifecycle hook
  mounted () {
    if (this.$route.name === 'futureHome') {
      this.isOnHome = true
    }
  }

  @Watch('$route')
  onPropertyChanged (to, from) {
    // console.log(to.name === 'futureHome')
    this.isOnHome = to.name === 'futureHome'
  }
}
export default App
</script>
<style lang="stylus" scoped src="./app.styl"></style>
<style lang="stylus" src="./main.styl"></style>
