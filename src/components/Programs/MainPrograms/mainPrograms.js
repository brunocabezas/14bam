
import { Component, Vue } from 'vue-property-decorator'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import { mapGetters, mapActions } from 'vuex'

@Component({
  store,
  components: {
    Loader
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingMainPrograms',
      mainPrograms: 'mainPrograms',
      mainProgramsNotFetched: 'mainProgramsNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadMainPrograms'])
  }
})
class MainPrograms extends Vue {
  urls = this.$root.urls

  get firstProgram () {
    return this.mainPrograms[0] || {}
  }

  get secondProgram () {
    return this.mainPrograms[1] || {}
  }

  mounted () {
    if (this.mainProgramsNotFetched) {
      this.loadMainPrograms()
    }
  }
}
export default MainPrograms
