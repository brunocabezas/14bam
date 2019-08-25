<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { loadPages, loadPosts } from "../api/client";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  // Lifecycle hook
  mounted() {
    loadPages();
    loadPosts();
    console.log('wp');
  }
}
</script>
