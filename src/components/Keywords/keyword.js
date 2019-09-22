import { Vue, Component } from 'vue-property-decorator'
import Loader from '@/components/common/Loader'
import ParticpantsGrid from '@/components/Participants/ParticipantsGrid/ParticipantsGrid.vue'
import store from '@/config/store'
import { mapGetters } from 'vuex'

@Component({
  store,
  components: {
    Loader,
    ParticpantsGrid
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingParticipants',
      keywords: 'keywordsFromParticipants',
      noStoreData: 'participantsNotFetched'
    })
  }
})
class Keyword extends Vue {
  // TODO move to getters
  get keyword () {
    // Using route paraments to set name
    const defaultKeyword = {
      name: this.$route.params.slug || '',
      participants: []
    }
    if (this.noStoreData) {
      return { ...defaultKeyword }
    } else {
      return (
        this.keywords.find(key => key.name === this.$route.params.slug) || {
          ...defaultKeyword
        }
      )
    }
  }
}
export default Keyword
