import { Component, Vue, Watch } from 'vue-property-decorator'
import Mapbox from 'mapbox-gl'
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglNavigationControl,
  MglGeolocateControl
} from 'vue-mapbox'
import Loader from '@/components/common/Loader'
import store from '@/config/store'
import { loadMarkersData } from '../../../../api/client'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_PUBLIC_TOKEN = process.env.VUE_APP_MAPBOX_PUBLIC_TOKEN || ''

@Component({
  store,
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
    Loader,
    MglPopup,
    MglGeolocateControl
  },
  filters: {
    // january => JAN
    shortMonth: function (monthName) {
      if (!monthName) return monthName
      return monthName.substring(0, 3).toUpperCase()
    }
  }
})
class HomeMap extends Vue {
  urls = this.$root.urls
  loadingData = true
  mapBoxAccessToken = MAPBOX_PUBLIC_TOKEN
  mapStyle = 'mapbox://styles/mapbox/dark-v9'
  // Map centered in Santiago, Chile
  mapCenter = [-70.64827, -33.45694]

  get expositions () {
    return this.$store.state.expositions
      .filter(expo => expo.address)
  }

  get markers () {
    const markers = this.$store.state.markersData
      .map((marker, ix) => {
        return {
          id: ix,
          coordinates:
            (marker.data &&
              marker.data.results &&
              marker.data.results[0] &&
              marker.data.results[0].geometry &&
              marker.data.results[0].geometry.location) ||
            null
        }
      })
      // Removing nulled coordinates items
      .filter(marker => marker.coordinates)
    return markers
  }

  @Watch('expositions')
  onPropertyChanged (value, oldValue) {
    // Do stuff with the watcher here.
    if (value.length > 0) {
      this.fetchData(
        value.filter(expo => expo.address).map(expo => expo.address)
      )
    }
  }
  // If exposition is defined; fetch lat, lng values as markers data
  mounted () {
    if (this.expositions.length > 0) {
      this.fetchData()
    }
  }

  // retrieves lan, lng data from google geo api
  fetchData (data = null) {
    this.loadingData = true
    const directions = this.expositions.map(expo => expo.address)
    loadMarkersData(data || directions)
      .then(response => {
        this.$store.commit('loadMarkersData', response)
        this.loadingData = false
      })
      .catch(res => {
        this.loadingData = false
      })
  }
  created () {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
export default HomeMap
