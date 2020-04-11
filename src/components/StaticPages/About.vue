<template>
  <StaticPage :loading="isLoading" :page="page" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import StaticPage from '@/components/StaticPages/StaticPage.vue'
import { WPStaticPageSlug } from '../../config/getters/pages'
import { Page } from '../../config/types/types'

@Component({
  store,
  methods: {
    ...mapActions(['loadWpPages'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingPages',
      pagesNotFetched: 'pagesNotFetched',
      page: WPStaticPageSlug.About
    })
  },
  components: {
    StaticPage
  }
})
class About extends Vue {
  // Actions
  loadWpPages!: () => void
  // Computed
  page!: Page
  isLoading!: boolean
  pagesNotFetched!: boolean

  mounted () {
    if (this.pagesNotFetched) {
      this.loadWpPages()
    }
  }
}
export default About
</script>
