import { WPResponse } from './wordpressTypes'

export type AsyncData = {
  responseData: WPResponse, // data from the API response
  status: number | undefined, // status code
  loading: boolean // loading indicator
}

export type AsyncPayload = {
  data: any, // data from the API response
  statusCode: number, // status code
  value: any, // status code
  // mutation type
  type: string
}
