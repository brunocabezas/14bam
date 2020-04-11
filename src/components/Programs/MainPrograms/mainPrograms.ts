import { Component, Vue } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import { mapGetters, mapActions } from 'vuex'
import urls, { AppUrls } from '@/config/urls'
import { MainPrograms, MainProgram } from '@/config/types/types'

@Component({
  store,
  components: {
    Loader
  },
  methods: {
    ...mapActions(['loadMainPrograms'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingMainPrograms',
      mainPrograms: 'mainPrograms',
      mainProgramsNotFetched: 'mainProgramsNotFetched'
    })
  }
})
class MainProgramsComponent extends Vue {
  urls: AppUrls = urls
  baseUrl: string = process.env.BASE_URL
  // Actions
  loadMainPrograms!: () => void
  // Computed
  mainPrograms!: MainPrograms
  isLoading!: boolean
  mainProgramsNotFetched!: boolean

  get firstProgram () : MainProgram {
    return this.mainPrograms[0] || {}
  }

  get secondProgram () : MainProgram {
    return this.mainPrograms[1] || {}
  }

  mounted () {
    if (this.mainProgramsNotFetched) {
      this.loadMainPrograms()
    }
  }
}
export default MainProgramsComponent
