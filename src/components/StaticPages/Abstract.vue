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
    ...mapActions(['loadPages'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingPages',
      pagesNotFetched: 'pagesNotFetched',
      page: WPStaticPageSlug.Abstract
    })
  },
  components: {
    StaticPage
  }
})
class Abstract extends Vue {
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
export default Abstract
</script>
