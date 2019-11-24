<template>
  <StaticPage :page="page" :isLoading="isLoading" />
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import StaticPage from '@/components/StaticPages/StaticPage.vue'

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
    StaticPage
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
