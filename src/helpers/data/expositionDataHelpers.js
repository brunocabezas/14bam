import { getAcfField, getWPTitle } from '../apiHelpers'

// const mapArrayOfImgUrls = img => img.sizes.medium || img.url
const mapArrayOfImgUrls = img => img.url

export const getExpositionsFromApi = data =>
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
      // Adding mainImg at the beggining of the array
      images: [mainImg.sizes.medium || mainImg.url, ...images],
      mainImg,
      name: getWPTitle(expo)
    })
  })

export const getExpositionFromApi = (data = []) => {
  if (!data[0]) {
    return undefined
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
      artists: getAcfField(data[0], 'artistas', []),
      curators: getAcfField(data[0], 'curadores', []),
      // Adding mainImg at the beggining of the array
      images: [mainImg.url, ...images],
      mainImg,
      name: getWPTitle(data[0])
    }
  )
}
