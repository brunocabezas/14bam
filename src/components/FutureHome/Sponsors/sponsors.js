import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  methods: {
    ...mapActions(['loadSponsors', 'loadWpCategories'])
  },
  computed: {
    ...mapGetters({
      isLoadingSponsors: 'isLoadingSponsors',
      isLoadingCategories: 'isLoadingCategories',
      sponsors: 'sponsors',
      categories: 'categoriesFromSponsors',
      sponsorsNotFetched: 'sponsorsNotFetched',
      categoriesNotFetched: 'categoriesNotFetched'
    })
  },
  components: {
    Loader
  }
})
class Sponsors extends Vue {
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
export default Sponsors
