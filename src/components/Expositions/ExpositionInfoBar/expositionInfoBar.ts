import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import { Exposition } from '@/config/types/types'

@Component({
  store,
  components: {
    Loader
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
  @Prop() readonly expoSlug: string = ''
  @Prop() readonly expo: Exposition | null = null
  // Methods
  loadExposition!: (expositionSlug: string) => void
  // Computed
  expositionBySlug!: (expositionSlug: string) => Exposition
  isLoadingExpositions!: boolean
  isLoadingExposition!: boolean
  expositionsNotFetched!: boolean
  expositionNotFetched!: boolean

  get exposition () : Exposition {
    return (
      this.expo || this.expositionBySlug(this.expoSlug) || {}
    )
  }

  get loadingData () : boolean {
    return this.isLoadingExpositions || this.isLoadingExposition
  }

  @Watch('expoSlug')
  onSlugChange (slug: string) {
    const dataIsNotFetched = this.expositionsNotFetched && this.expositionNotFetched
    if ((dataIsNotFetched && slug) || this.exposition.slug !== slug) {
      this.loadExposition(slug)
    }
  }
  mounted () {
    const dataIsNotFetched = this.expositionsNotFetched && this.expositionNotFetched
    if ((dataIsNotFetched && this.expoSlug) || (this.exposition.slug !== this.expoSlug && this.expoSlug)) {
      this.loadExposition(this.expoSlug)
    }
  }
}
export default ExpositionInfoBar
