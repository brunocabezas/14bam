import { Component, Vue, Watch } from 'vue-property-decorator'
import Mapbox from 'mapbox-gl'
// import { loadCalendar } from '../../../../api/client'
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglNavigationControl,
  MglGeolocateControl
} from 'vue-mapbox'
import findLatLong from 'find-lat-lng'
import store from '@/config/store'
import { loadMarkersData } from '../../../../api/client'

const MAPBOX_PUBLIC_TOKEN = process.env.VUE_APP_MAPBOX_PUBLIC_TOKEN || ''
const GOOGLE_GEO_API = process.env.VUE_APP_GOOGLE_GEO_API || ''
const geoCLient = findLatLong(GOOGLE_GEO_API)

@Component({
  store,
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
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
  mapBoxAccessToken = MAPBOX_PUBLIC_TOKEN
  mapStyle = 'mapbox://styles/mapbox/dark-v9'
  mapCenter = [-70.64827, -33.45694]
  mapStyle = {
    // height: 500
  }

  get directions () {
    // return this.$store.state.expositions.map(expo => expo.address)
    return [
      'Dieciocho 438, Santiago',
      'Vitacura 2680, Santiago, Chile',
      'José Victorino Lastarria 307, Plaza Mulato Gil, Santiago, Chile',
      'Avenida Matucana 100, Santiago, Chile',
      'Merced 50, Santiago, Chile',
      'Félix Mendelssohn 2941, Santiago, Chile',
      'Pedro Aguirre Cerda 6100, Santiago, Chile.',
      'Vicuña Mackenna 94, Santiago, Chile',
      'Avda. Jaime Guzmán Errázuriz 3300, Santiago, Chile',
      'Huérfanos 2919, Santiago, Chile.',
      'Recoleta 683, Santiago, Chile',
      'Esmeralda 749, Santiago, Chile',
      'Ismael Valdés Vergara 506, Santiago, Chile',
      'José Miguel de la Barra 650, Santiago, Chile',
      'Av. República 475, Santiago',
      "Av Libertador Bernardo O'Higgins 227"
    ]
  }

  get markers () {
    const markers = this.$store.state.markersData
      .map((marker, ix) => {
        console.log(marker)
        return ({
          id: ix,
          coordinates:
          (marker.data &&
          marker.data.results &&
          marker.data.results[0] &&
          marker.data.results[0].geometry &&
          marker.data.results[0].geometry.location) ||
        null
        })
      })
      .filter(notNulledMarker => notNulledMarker.coordinates)
      // .filter(marker => ({ ...marker, coordinates: [marker.coordinates.lng, marker.coordinates.lat] }))
      // .map((marker, ix) => [marker.lng, marker.lat])
      // .map((marker, ix) => ({ lat: marker.lat, lng: marker.lng }))
    console.log(markers)
    return markers
  }

  @Watch('directions')
  onPropertyChanged (value, oldValue) {
    // Do stuff with the watcher here.
    if (value.length > 0) {
      console.log(value)
      geoCLient(value).then(response => {
        console.log('response')
      })
    }
  }
  mounted () {
    if (this.directions.length > 0) {
      loadMarkersData(this.directions).then(response => {
        this.$store.commit('loadMarkersData', response)
      })
    }
  }
  created () {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
export default HomeMap
