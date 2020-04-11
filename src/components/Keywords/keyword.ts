import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import { Route } from 'vue-router'
import Loader from '@/components/common/Loader.vue'
import ParticipantsGrid from '@/components/Participants/ParticipantsGrid/ParticipantsGrid.vue'
import store from '@/config/store'
import { Keywords, Keyword } from '@/config/types/types'
import { keyword } from '@/config/state/initialState'

@Component({
  store,
  components: {
    Loader,
    ParticipantsGrid
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingParticipants',
      keywords: 'keywordsFromParticipants',
      participantsNotFetched: 'participantsNotFetched'
    })
  }
})
class KeywordComponent extends Vue {
  $route!: Route

  participantsNotFetched!: boolean
  isLoading!: boolean
  keywords!: Keywords

  // TODO move to getters
  get keyword (): Keyword {
    // Using route paraments to set name
    const defaultKeyword = {
      name: this.$route.params.slug || '',
      ...keyword
    }

    if (this.participantsNotFetched) {
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
export default KeywordComponent
