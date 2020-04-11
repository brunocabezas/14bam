<template>
  <StaticPage :loading="isLoading" :page="page" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import StaticPage from '@/components/StaticPages/StaticPage.vue'
import { Page } from '../../config/types/types'
import { WPStaticPageSlug } from '../../config/getters/pages'

@Component({
  store,
  methods: {
    ...mapActions(['loadPages'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingPages',
      pagesNotFetched: 'pagesNotFetched',
      page: WPStaticPageSlug.Contest
    })
  },
  components: {
    StaticPage
  }
})
class Contest extends Vue {
  // Actions
  loadPages!: () => void
  // Computed
  page!: Page
  isLoading!: boolean
  pagesNotFetched!: boolean

  mounted () {
    if (this.pagesNotFetched) {
      this.loadPages()
    }
  }
}
export default Contest
</script>
