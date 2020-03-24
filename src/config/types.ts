
export interface Store {
  state: State
}

export interface AsyncData {
  responseData: any, // data from the API response
  status: any, // status code
  loading: boolean // loading indicator
}

export interface AsyncPayload {
  data: any, // data from the API response
  statusCode: number, // status code
  value: any, // status code
  type: string
}
export interface State {
  sponsors: AsyncData,
  expositions: AsyncData,
  exposition: AsyncData,
  participants: AsyncData,
  participant: AsyncData,
  main_programs: AsyncData,
  keywords: any,
  activities: AsyncData,
  program: AsyncData,
  markersData: any,
  event: any,
  categories: AsyncData,
  pages: AsyncData
}


// interfaces to create
// Exposition
export interface Exposition {
  slug: string,
  startDate: string,
}

export interface Participant {
  name: string,
  slug: string,
}

export interface WPEvent {
  ID: number,
}

export interface Event {
  id: number,
  slug: string,
  date: {
    jsDate: Date
  }
}

export interface Program {
  id: number,
  slug: string,
  date: {
    jsDate: Date
  },
  mainProgram: object
  // images: Array()
  images: any
  events: any
}

export interface Category {
  slug: string,
  term_id: number,
  id: number,
}

export interface Sponsor {
  order: number,
  category: Category
}