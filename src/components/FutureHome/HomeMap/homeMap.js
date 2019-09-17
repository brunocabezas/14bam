import { Component, Vue, Watch } from 'vue-property-decorator'
import Mapbox from 'mapbox-gl'
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglNavigationControl,
  MglGeolocateControl
} from 'vue-mapbox'
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
  // Map centered in Santiago, Chile
  mapCenter = [-70.64827, -33.45694]

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
      // Removing nulled coordinates items
      .filter(marker => marker.coordinates)
    return markers
  }

  @Watch('directions')
  onPropertyChanged (value, oldValue) {
    // Do stuff with the watcher here.
    if (value.length > 0) {
      this.fetchData(value)
    }
  }
  mounted () {
    if (this.directions.length > 0) {
      this.fetchData()
    }
  }

  fetchData (data = null) {
    loadMarkersData(data || this.directions).then(response => {
      this.$store.commit('loadMarkersData', response)
    })
  }
  created () {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
export default HomeMap
