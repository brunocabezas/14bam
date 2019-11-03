import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import { mapActions, mapGetters } from 'vuex'

@Component({
  props: {
    displayNewSponsors: {
      type: Boolean,
      default: false
    }
  },
  store,
  methods: {
    ...mapActions(['loadSponsors', 'loadWpCategories'])
  },
  computed: {
    ...mapGetters({
      isLoadingSponsors: 'isLoadingSponsors',
      isLoadingCategories: 'isLoadingCategories',
      newSponsors: 'sponsors',
      oldSponsors: 'oldSponsors',
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
  get sponsors () {
    return this.displayNewSponsors ? this.newSponsors : this.oldSponsors
  }

  get isLoading () {
    return this.isLoadingCategories ||
      this.isLoadingSponsors
  }

  mounted () {
    if (this.categoriesNotFetched) {
      this.loadWpCategories()
    }
    if (this.sponsorsNotFetched) {
      this.loadSponsors()
    }
  }
}
export default Sponsors
