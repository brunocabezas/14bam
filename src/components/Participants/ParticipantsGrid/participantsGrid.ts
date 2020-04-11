import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import urls, { AppUrls } from '@/config/urls'
import { Participants } from '@/config/types/types'

@Component({
  store,
  components: {
    Loader
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
  @Prop({ default: null }) readonly participantsProps!: Participants

  urls : AppUrls = urls
  // Methods
  loadParticipants!: () => void
  // Computed
  participantsFromState!: Participants
  isLoading!: boolean
  participantsNotFetched!: boolean

  get participants () : Participants {
    return this.participantsProps || this.participantsFromState
  }

  mounted () {
    if (this.participantsNotFetched) {
      this.loadParticipants()
    }
  }
}
export default ParticipantsGrid
