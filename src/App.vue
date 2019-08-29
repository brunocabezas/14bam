<template>
  <div id="app" class="app">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:500,700&display=swap" rel="stylesheet">
    <Header v-if="showHeaderAndFooter" />
    <div class="appContent">
      <router-view></router-view>
    </div>
    <Footer v-if="showHeaderAndFooter" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
import { loadPages, loadPosts } from "../api/client.js";

@Component({
  components: {
    Header,
    Footer
  },
})
export default class App extends Vue {
  // Header and footer are hidden on temporaryHome
  showHeaderAndFooter = true;
  
  // Lifecycle hook
  mounted() {
    // console.log(this.$route);
    if (this.$route.name==='temporaryHome') {
      this.showHeaderAndFooter = false;
    }
  }

  @Watch('$route')
  onPropertyChanged(to, from) {
    this.showHeaderAndFooter = from.name==='temporaryHome';
  }
}
</script>
<style lang="stylus" src="./app.styl"></style>