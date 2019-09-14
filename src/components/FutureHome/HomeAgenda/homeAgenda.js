
import { Component, Vue } from 'vue-property-decorator'
import { loadCalendar } from '../../../../api/client'
import store from '@/config/store'
// import { getExpositionsFromApi, getSponsorsFromApi } from '@/helpers/apiHelpers'
// import { getSponsorsFromApi } from '@/helpers/apiHelpers'

@Component({
  store,
  filters: {
    // january => JAN
    shortMonth: function (monthName) {
      if (!monthName) return monthName
      return monthName.substring(0, 3).toUpperCase()
    }
  }
})
class HomeAgenda extends Vue {
  urls = this.$root.urls

  get events () {
    return this.$store.state.calendar
  }

  mounted () {
    loadCalendar().then(response => {
      this.$store.commit('loadCalendar', response)
    })
  }
}
export default HomeAgenda
