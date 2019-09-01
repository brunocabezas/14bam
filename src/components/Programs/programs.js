
import { Component, Vue } from 'vue-property-decorator'
import { loadPrograms } from '../../../api/client'
import store from '@/config/store'

@Component({
  store
})
class Programs extends Vue {
  // programs : Array =  '[]';

  get programs () {
    return this.$store.state.programs
  }

  mounted () {
    loadPrograms().then(res => {
      this.$store.commit('loadPrograms', res.data)
    })
  }
}
export default Programs
