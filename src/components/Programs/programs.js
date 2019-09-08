
import { Component, Vue } from 'vue-property-decorator'
import { loadPrograms } from '../../../api/client'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'

@Component({
  store,
  components: {
    Loader
  },
  data () {
    return { loading: false }
  }
})
class Programs extends Vue {
  // programs : Array =  '[]';
  loadingData = false;

  get programs () {
    return this.$store.state.programs
  }

  urls = this.$root.urls

  mounted () {
    this.loadingData = true
    loadPrograms().then(res => {
      this.$store.commit('loadPrograms', res)
      this.loadingData = false
    })
  }
}
export default Programs
