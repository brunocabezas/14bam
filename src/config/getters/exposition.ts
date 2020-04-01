import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { WpImage, WPResponse } from '../types/wordpressTypes'
import { Expositions, Exposition } from '../types/types'
import { exposition } from '../initialState'

// const mapArrayOfImgUrls = img => img.sizes.medium || img.url
const mapArrayOfImgUrls = (img: WpImage) => img.url

export const getExpositionsFromApi = (data: WPResponse): Expositions =>
  data.map(expo => {
    const images = getAcfField(expo, 'galeria', []).map(
      mapArrayOfImgUrls
    )
    const mainImg = getAcfField(expo, 'foto_principal', { url: '', sizes: { medium: '' } })
    return ({
      id: expo.id,
      wpId: expo.id,
      slug: expo.slug,
      place: getAcfField(expo, 'espacio'),
      hour: getAcfField(expo, 'horarios'),
      hour2: getAcfField(expo, 'horarios_2'),
      web: getAcfField(expo, 'web'),
      webText: getAcfField(expo, 'web_label'),
      address: getAcfField(expo, 'direccion'),
      startDate: getAcfField(expo, 'fecha_inicio'),
      endDate: getAcfField(expo, 'fecha_termino'),
      description: getAcfField(expo, 'texto_curatorial'),
      artists: getAcfField(expo, 'artistas', []),
      curators: getAcfField(expo, 'curadores', []),
      audioGuideSpotifyURL: getAcfField(expo, 'audioguide_link', ''),
      // Adding mainImg at the beggining of the array
      images: [mainImg.sizes.medium || mainImg.url, ...images],
      mainImg,
      name: getWPTitle(expo)
    })
  })

export const getExpositionFromApi = (data: WPResponse = []): Exposition => {
  if (!data[0]) {
    return { ...exposition }
  }
  const images = getAcfField(data[0], 'galeria', []).map(
    mapArrayOfImgUrls
  )
  const mainImg = getAcfField(data[0], 'foto_principal', { url: '', sizes: { medium: '' } })
  return Object.assign(
    {},
    {
      id: data[0].id,
      wpId: data[0].id,
      slug: data[0].slug,
      place: getAcfField(data[0], 'espacio'),
      hour: getAcfField(data[0], 'horarios'),
      hour2: getAcfField(data[0], 'horarios_2'),
      web: getAcfField(data[0], 'web'),
      webText: getAcfField(data[0], 'web_label'),
      address: getAcfField(data[0], 'direccion'),
      startDate: getAcfField(data[0], 'fecha_inicio'),
      endDate: getAcfField(data[0], 'fecha_termino'),
      description: getAcfField(data[0], 'texto_curatorial'),
      audioGuideSpotifyURL: getAcfField(data[0], 'audioguide_link', ''),
      artists: getAcfField(data[0], 'artistas', []),
      curators: getAcfField(data[0], 'curadores', []),
      // Adding mainImg at the beggining of the array
      images: [mainImg.url, ...images],
      mainImg,
      name: getWPTitle(data[0])
    }
  )
}
