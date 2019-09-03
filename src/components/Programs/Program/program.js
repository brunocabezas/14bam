
import { Component, Vue } from 'vue-property-decorator'
import { loadProgram } from '../../../../api/client'
import store from '@/config/store'

@Component({
  store
})
class Program extends Vue {
  urls = this.$root.urls

  get program () {
    return this.$store.state.program
  }

  mounted () {
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.program.slug
      if (doRequest) {
        loadProgram(this.$route.params.slug)
          .then(res => this.$store.commit('loadProgram', res))
      }
    }
  }
}
export default Program
