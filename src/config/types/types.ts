import { AsyncData } from './asyncDataTypes'
import { WpImage } from './wordpressTypes'

// Root store object
export type Store = {
  state: State
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
  // event: any,
  categories: AsyncData,
  pages: AsyncData
}

// Arrays 
export type Participants = Participant[]
export type Programs = Program[]
export type MainPrograms = MainProgram[]
export type Categories = Category[]
export type Sponsors = Sponsor[]
export type SponsorCategories = SponsorCategory[]
export type Activities = Activity[]
export type Expositions = Exposition[]
export type Keywords = Keyword[]

// Exposition
export type Exposition = {
  slug: string,
  name: string,
  description: string,
  web: string,
  webText: string,
  place: string,
  hour: string,
  hour2: string,
  startDate: string,
  endDate: string,
  images: any,
  artists: any,
  curators: any,
  audioGuideSpotifyURL: string
  mainImg: WpImage,

}

// Participants
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

// Activities/Events
export type Activity = {
  id: number,
  slug: string,
  title: string,
  description: string,
  image: any,
  place: any,
  limitedTickets: any,
  participants: any,
  videoUrl: string,
  date: {
    day: any,
    jsDate: Date,
    month: any,
    dateString: string,
    dateTime: any
  },
  summary: string,
}

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

// Program
export type Program = {
  id: number,
  slug: string,
  text: string,
  name: string,
  date: {
    jsDate: Date
  },
  mainProgram: object,
  // images: Array()
  images: any,
  events: any,
  participants: any,
}

export type MainProgram = {
  id: number,
  slug: string,
  text: string,
  name: string,
  shortDescription: string
  images: any
  events: any
}

// Categories
export type Category = {
  name: string
  id: number,
  order: string,
  sponsors: Sponsors
}

// Sponsors
export type Sponsor = {
  name: string,
  logo: string,
  author: number,
  order: number,
  category: SponsorCategory,
  url?: string,
}

export type SponsorCategory = {
  name: string
  id: number,
  // slug: string,
  // order: string,
  // sponsors: Sponsors
}

// Page
export type Page = {
  title: string,
  video: any,
  abstract: any, // string?
  dates: any, // string?
  gallery: string[]
}

export type PageGalleryImg = {
  url: string
}

// Keywords
export type Keyword = { 
  id: string,
  name: string,
  participants: Participants
}