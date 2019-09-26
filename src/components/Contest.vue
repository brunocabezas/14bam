<template>
  <Loader :loading="isLoading">
    <h1 class="pageTitle">{{page.title.rendered}}</h1>
    <div class="contestText" v-html="page.content.rendered"></div>
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
      page: 'contestPage'
    })
  }
})
class Contest extends Vue {
  mounted () {
    if (this.pagesNotFetched) {
      this.loadWpPages()
    }
  }
}
export default Contest
</script>

<style lang="stylus">
.contestText p
  color white
</style>
