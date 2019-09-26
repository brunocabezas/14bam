<template>
  <Loader :loading="isLoading">
    <h1 class="pageTitle">{{page.title.rendered}}</h1>
    <div class="aboutText" v-html="page.content.rendered"></div>
  </Loader>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  methods: {
    ...mapActions(['loadWpPages'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingPages',
      pagesNotFetched: 'pagesNotFetched',
      page: 'aboutPage'
    })
  }
})
class About extends Vue {
  mounted () {
    if (this.pagesNotFetched) {
      this.loadWpPages()
    }
  }
}
export default About

</script>

<style lang="stylus">
.aboutText p
  color white
</style>
