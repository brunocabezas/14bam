import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import { mapActions, mapGetters } from 'vuex'
import { Categories } from '@/config/types/types'

@Component({
  store,
  methods: {
    ...mapActions(['loadSponsors', 'loadWpCategories'])
  },
  computed: {
    ...mapGetters({
      categories: 'categoriesFromSponsors',
      sponsorsNotFetched: 'sponsorsNotFetched',
      categoriesNotFetched: 'categoriesNotFetched',
      isLoadingSponsors: 'isLoadingSponsors',
      isLoadingCategories: 'isLoadingCategories'
    })
  },
  components: {
    Loader
  }
})
class SponsorsComponent extends Vue {
  // Actions
  loadSponsors!: () => void
  loadWpCategories!: () => Promise<void>

  // Computed
  categories!: Categories
  isLoadingSponsors!: boolean
  isLoadingCategories!: boolean
  sponsorsNotFetched!: boolean
  categoriesNotFetched!: boolean

  get isLoading () {
    return this.isLoadingCategories ||
      this.isLoadingSponsors
  }

  mounted () {
    if (this.categoriesNotFetched) {
      this.loadWpCategories().then(res => {
        if (this.sponsorsNotFetched) {
          this.loadSponsors()
        }
      })
    } else if (this.sponsorsNotFetched) {
      this.loadSponsors()
    }
  }
}
export default SponsorsComponent
