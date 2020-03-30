
export type Store = {
  state: State
}

export type AsyncData = {
  responseData: any, // data from the API response
  status: any, // status code
  loading: boolean // loading indicator
}

export type AsyncPayload = {
  data: any, // data from the API response
  statusCode: number, // status code
  value: any, // status code
  type: string
}
export type State = {
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

// types = to create
// Exposition
export type Exposition = {
  slug: string,
  startDate: string,
}

export type SingleParticipant = {
  name: string,
  slug: string,
  id: number,
  wpId: number,
  img: string,
  images: any,
  keywords: any,
  bio: string,
  workTitle: string,
  workDescription: string,
  expo: any,
  related: any,
}

export type Participant = {
  name: string,
  slug: string,
  id: number,
  wpId: number,
  img: string,
  images: any,
  keywords: any,
}

export type Participants = Participant[]

export type Event = {
  id: number,
  slug: string,
  date: {
    jsDate: Date
  },
  start: {
    dateTime: any
  },
  summary: string,
}

export type Program = {
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

export type Category = {
  name: string
  id: number,
}

export type Categories = Category[]

export type Sponsor = {
  name: string,
  logo: string,
  author: string,
  order: number,
  category: SponsorCategory,
  url?: string,
}

export type SponsorCategory = {
  term_id: number,
  slug: string,
}