import { Component, Vue, Watch } from 'vue-property-decorator'
import Mapbox, { MapContextEvent } from 'mapbox-gl'
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglNavigationControl,
  MglGeolocateControl
} from 'vue-mapbox'
import Loader from '@/components/common/Loader.vue'
import store from '@/config/store'
import { loadMarkersData } from '../../../../api/client'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapGetters } from 'vuex'
import { shortenMonth } from '@/helpers/dateHelpers'
import urls, { AppUrls } from '@/config/urls'
import { Expositions, MapMarker } from '@/config/types/types'
import {
  GoogleMapMarker,
  GoogleMapResponse
} from '@/config/types/googleMapsTypes'

const MAPBOX_PUBLIC_TOKEN = process.env.VUE_APP_MAPBOX_PUBLIC_TOKEN || ''
const MAPBOX_THEME = 'mapbox://styles/mapbox/dark-v9'
const SANTIAGO_COORDINATES = [-70.64827, -33.45694]

// next steps
// check console warning regarding mapbox gl
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
    shortMonth: shortenMonth
  },
  computed: {
    ...mapGetters({ expositionsFromState: 'expositionsByDate' })
  }
})
class HomeMap extends Vue {
  urls: AppUrls = urls
  loadingData: boolean = true
  mapBoxAccessToken: string = MAPBOX_PUBLIC_TOKEN
  mapStyle: string = MAPBOX_THEME
  // Map centered in Santiago, Chile
  mapCenter = SANTIAGO_COORDINATES
  // Computed
  expositionsFromState!: Expositions
  // Mapbox reference
  mapbox!: any | null

  get expositions (): Expositions {
    // returning expositions with valid addresses
    return this.expositionsFromState.filter(expo => expo.address)
  }

  get markers () {
    const markers = this.$store.state.markersData
      .map((marker: GoogleMapMarker, ix: number) => {
        return {
          id: ix,
          coordinates: (marker.geometry && marker.geometry.location) || null
        }
      })
      // Removing nulled coordinates items
      .filter((marker: MapMarker) => marker.coordinates)
    return markers
  }

  @Watch('expositions')
  onPropertyChanged (value: Expositions): void {
    // Do stuff with the watcher here.
    if (value.length > 0) {
      const arrayOfAddresses = value
        .filter(expo => expo.address)
        .map(expo => expo.address)
      this.fetchData(arrayOfAddresses)
    }
  }
  // If exposition is defined; fetch lat, lng values as markers data
  mounted (): void {
    if (this.expositions.length > 0) {
      this.fetchData()
    }
  }

  // retrieves lan, lng data from google geo api
  fetchData (addresses?: string[]): void {
    this.loadingData = true
    const directions = this.expositions.map(expo => expo.address)
    loadMarkersData(addresses || directions)
      .then((response: any) => {
        const markers: GoogleMapMarker[] = response.map(
          (r: GoogleMapResponse) => r.data.results[0]
        )
        this.$store.commit('loadMarkersData', markers)
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
