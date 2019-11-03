<template>
  <Loader :loading="isLoading">
    <h1 v-if="page" class="pageTitle">{{page.title.rendered}}</h1>
    <div v-if="page" class="AbstractText" v-html="page.content.rendered"></div>
  </Loader>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
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
      page: 'abstractPage'
    })
  },
  components: {
    Loader
  }
})
class Abstract extends Vue {
  mounted () {
    if (this.pagesNotFetched) {
      this.loadWpPages()
    }
  }
}
export default Abstract
</script>

<style lang="stylus">
.AbstractText p
  color white
</style>
