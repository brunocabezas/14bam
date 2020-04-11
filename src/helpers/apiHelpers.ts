import { WPResponseItem } from '@/config/types/wordpressTypes'
//
// apiHelpers
// All helpers defined here handle API responses and

// Gets advanced custom fields values from results
export const getAcfField = (
  results: WPResponseItem,
  fieldName: string,
  defaultValue: any = undefined
): any => (results.acf_fields && results.acf_fields[fieldName]) || defaultValue

// Gets wordpress post title
export const getWPTitle = (object: WPResponseItem): string =>
  (object.title && object.title.rendered) || ''
