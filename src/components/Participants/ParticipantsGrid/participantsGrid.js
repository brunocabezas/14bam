import { Vue, Component } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  components: {
    Loader
  },
  props: {
    participantsProps: {
      type: Array,
      default: null
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingParticipants',
      participantsFromState: 'participants',
      participantsNotFetched: 'participantsNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadParticipants'])
  }
})
class ParticipantsGrid extends Vue {
  urls = this.$root.urls

  get participants () {
    return this.participantsProps || this.participantsFromState
  }

  mounted () {
    if (this.participantsNotFetched) {
      this.loadParticipants()
    }
  }
}
export default ParticipantsGrid
