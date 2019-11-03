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
    video: pageFromState.acf_fields.video,
    gallery: pageFromState.acf_fields.gallery && pageFromState.acf_fields.gallery.map(img => img.sizes.medium)
  })
}
