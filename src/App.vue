<template>
  <div id="app">
    <Header />
    <div class="appContent">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/layout/Header/Header.vue";
import Footer from "@/components/layout/Footer/Footer.vue";
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
