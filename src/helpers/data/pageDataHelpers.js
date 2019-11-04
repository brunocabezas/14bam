import { getAcfField, getWPTitle } from '../apiHelpers'

export function pageFromStateByLabel (label, state) {
  const pageFromState = state.pages.responseData.find(page =>
    page.slug.includes(label)
  )
  if (!pageFromState || !label) {
    return {
      title: '',
      gallery: [],
      video: '',
      content: { rendered: '' },
      acf_fields: {
        gallery: [],
        video: ''
      }
    }
  }

  return Object.assign({}, pageFromState, {
    title: getWPTitle(pageFromState),
    video: getAcfField(pageFromState, 'video'),
    abstract: getAcfField(pageFromState, 'short_description'),
    dates: getAcfField(pageFromState, 'dates'),
    gallery: getAcfField(pageFromState, 'gallery', []).map(img => img.url)
  })
}
