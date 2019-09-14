
import { Component, Vue, Watch } from 'vue-property-decorator'
import { loadProgram, loadEvent, loadProgramCalendar } from '../../../../api/client'
import store from '@/config/store'
import Loader from '@/components/common/Loader'

@Component({
  store,
  components: {
    Loader
  },
  props: {
    // prograType displays sets wheter the item displayed is an program or an event
    // a single program can contain many events
    programType: {
      type: String,
      default: 'program',
      validator: function (value) {
        // The value must match one of these strings
        return ['program', 'event'].indexOf(value) !== -1
      }
    }
  }
})
class Program extends Vue {
  urls = this.$root.urls

  loadingData = false

  get program () {
    return this.$props.programType === 'program'
      ? this.$store.state.program : this.$store.state.event
  }

  @Watch('programType')
  onPropertyChanged (value, oldValue) {
    this.fetchData(value)
  }

  mounted () {
    // console.log(this, this.type, this.$props.programType)
    if (this.$route.params.slug) {
      const doRequest = this.$route.params.slug !== this.program.slug
      if (doRequest) {
        this.fetchData()
      }
    }
  }

  fetchData (typeArg = null) {
    const type = typeArg || this.$props.programType
    const action = type === 'program' ? loadProgram : loadEvent
    const commitMsg = type === 'program' ? 'loadProgram' : 'loadEvent'
    // Use slug from route to query wp rest api
    this.loadingData = true
    action(this.$route.params.slug)
      .then(res => {
        this.loadingData = false
        this.$store.commit(commitMsg, res)
        if (type === 'program') {
          loadProgramCalendar()
        }
      })
  }
}
export default Program
