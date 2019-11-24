import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import Loader from '@/components/common/Loader.vue'
import { mapGetters, mapActions } from 'vuex'

@Component({
  store,
  filters: {
    // january => JAN
    shortMonth: function (monthName) {
      if (!monthName) return monthName
      return monthName.substring(0, 3).toUpperCase()
    }
  },
  computed: {
    ...mapGetters({
      events: 'activities',
      isLoading: 'isLoadingActivities',
      activitiesNotFetched: 'activitiesNotFetched'
    })
  },
  methods: {
    ...mapActions(['loadActivities'])
  },
  components: {
    Loader
  }
})
class Agenda extends Vue {
  urls = this.$root.urls

  mounted () {
    if (this.activitiesNotFetched) {
      this.loadActivities()
    }
  }
}
export default Agenda
