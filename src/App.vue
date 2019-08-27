<template>
  <div id="app" class="app">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:500,700&display=swap" rel="stylesheet">
    <!-- <Header /> -->
    <div class="appContent">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
import { loadPages, loadPosts } from "../api/client.js";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  // Lifecycle hook
  mounted() {
    // loadPages();
    // loadPosts();
  }
}
</script>
<style lang="stylus" src="./app.styl"></style>