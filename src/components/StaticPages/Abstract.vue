<template>
  <StaticPage :page="page" :isLoading="isLoading" />
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
      page: WPStaticPageSlug.AboutExposition
    })
  },
  components: {
    StaticPage
  }
})
class Abstract extends Vue {
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
export default Abstract
</script>
