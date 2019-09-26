import { Component, Vue, Watch } from 'vue-property-decorator'
import {
  loadProgram,
  loadEvent,
  loadProgramCalendar
} from '../../../../api/client'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import Carousel from '@/components/common/Carousel/Carousel.vue'

@Component({
  store,
  components: {
    Loader,
    Carousel
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
// Also displays an event
class Program extends Vue {
  urls = this.$root.urls

  loadingData = false

  get program () {
    return this.$props.programType === 'program'
      ? this.$store.state.program
      : this.$store.state.event
  }
  loadingData = false

  get images () {
    // Getting array of urls from program
    return (
      (this.program &&
        this.program.images &&
        this.program.images.map(img => img.url)) ||
      []
    )
  }

  @Watch('programType')
  onProgramTypeChanged (value, oldValue) {
    this.fetchData(value)
  }

  @Watch('$route')
  onRouteChanged (value, oldValue) {
    this.fetchData()
  }

  mounted () {
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

    this.loadingData = true
    // Use slug from route to query wp rest api
    action(this.$route.params.slug).then(res => {
      this.loadingData = false
      this.$store.commit(commitMsg, res)
      if (type === 'program') {
        loadProgramCalendar()
      }
    })
  }
}
export default Program
