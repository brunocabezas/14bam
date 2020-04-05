import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { Page, PageGalleryImg, State } from '@/config/types/types'
import { WPResponseItem } from '@/config/types/wordpressTypes'

export enum WPStaticPageSlug {
  About = 'sobre',
  Contest = 'concurso',
  AboutExposition = 'mundo',
}

export function pageFromStateByLabel (slug: WPStaticPageSlug, state: State) : Page {
  const pageFromState = state.pages.responseData.find((page : WPResponseItem) =>
    page.slug.includes(slug)
  )
  if (!pageFromState || !slug) {
    return {
      title: '',
      gallery: [],
      video: '',
      abstract: '',
      dates: ''
      // content: { rendered: '' },
      // acf_fields: {
      // gallery: [],
      // video: ''
      // }
    }
  }

  return Object.assign({}, pageFromState, {
    title: getWPTitle(pageFromState),
    video: getAcfField(pageFromState, 'video'),
    abstract: getAcfField(pageFromState, 'short_description'),
    dates: getAcfField(pageFromState, 'dates'),
    gallery: getAcfField(pageFromState, 'gallery', []).map((img: PageGalleryImg) => img.url)
  })
}
