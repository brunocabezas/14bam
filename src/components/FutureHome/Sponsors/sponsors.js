import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
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
      isLoading: 'isLoadingSponsors',
      newSponsors: 'sponsors',
      oldSponsors: 'oldSponsors',
      categories: 'categoriesFromSponsors',
      sponsorsNotFetched: 'sponsorsNotFetched',
      categoriesNotFetched: 'categoriesNotFetched'
    })
  }
})
class Sponsors extends Vue {
  get sponsors () {
    return this.displayNewSponsors ? this.newSponsors : this.oldSponsors
  }

  mounted () {
    if (this.categoriesNotFetched) {
      this.loadWpCategories().then(res => {
        if (this.sponsorsNotFetched) {
          this.loadSponsors()
        }
      })
    }
  }
}
export default Sponsors
