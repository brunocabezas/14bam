import { Vue, Component, Watch } from 'vue-property-decorator'
import Loader from '@/components/common/Loader'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  components: {
    Loader
  },
  props: {
    expoSlug: {
      default: null,
      type: String
    },
    expo: {
      default: null,
      type: Object
    }
  },

  methods: {
    ...mapActions(['loadExposition'])
  },
  computed: {
    ...mapGetters({
      expositionBySlug: 'expositionBySlug',
      isLoadingExpositions: 'isLoadingExpositions',
      isLoadingExposition: 'isLoadingExposition',
      expositionsNotFetched: 'expositionsNotFetched',
      expositionNotFetched: 'expositionNotFetched'
    })
  }
})
class ExpositionInfoBar extends Vue {
  get exposition () {
    return (
      this.expo || this.expositionBySlug(this.expoSlug) || {}
    )
  }

  get loadingData () {
    return this.isLoadingExpositions || this.isLoadingExposition
  }

  @Watch('expoSlug')
  onSlugChange (slug, oldVal) {
    if (this.expositionsNotFetched && this.expositionNotFetched && slug) {
      this.loadExposition({ slug })
    } else if (this.exposition.slug !== slug) {
      this.loadExposition({ slug })
    }
  }
  mounted () {
    if (this.expositionsNotFetched && this.expositionNotFetched && this.expoSlug) {
      this.loadExposition({ slug: this.expoSlug })
    } else if (this.exposition.slug !== this.expoSlug && this.expoSlug) {
      this.loadExposition({ slug: this.expoSlug })
    }
  }
}
export default ExpositionInfoBar
