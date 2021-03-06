import { getAcfField, getWPTitle } from '../../helpers/apiHelpers'
import { Page, PageGalleryImg, State } from '@/config/types/types'
import { WPResponseItem } from '@/config/types/wordpressTypes'
import { page } from '../state/initialState'

// Three wordpress pages are being displayed
export enum WPStaticPageSlug {
  About = 'sobre',
  Contest = 'concurso',
  Abstract = 'mundo',
}

export function pageFromStateByLabel (slug: WPStaticPageSlug, state: State) : Page {
  const pageFromState = state.pages.responseData.find((page : WPResponseItem) =>
    page.slug.includes(slug)
  )
  if (!pageFromState || !slug) {
    return page
  } else {
    return Object.assign({}, pageFromState, {
      title: getWPTitle(pageFromState),
      video: getAcfField(pageFromState, 'video'),
      abstract: getAcfField(pageFromState, 'short_description'),
      dates: getAcfField(pageFromState, 'dates'),
      gallery: getAcfField(pageFromState, 'gallery', []).map((img: PageGalleryImg) => img.url)
    })
  }
}
