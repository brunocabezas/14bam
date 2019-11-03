<template>
  <StaticPage :loading="isLoading" :page="page" />
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
      page: 'aboutPage'
    })
  },
  components: {
    StaticPage
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
