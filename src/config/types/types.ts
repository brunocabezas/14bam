import { AsyncData } from './asyncDataTypes'
import { WpImage, WPPost, WPLinks, WPContent, WPGuid, WPExcerpt, WPAcfFields } from './wordpressTypes'
import { DataType } from '../mutationTypes'
import { GoogleMapMarker } from './googleMapsTypes'

// Root store object
export interface Store {
  state: State
}

export interface State {
  [DataType.Sponsors]: AsyncData,
  [DataType.Expositions]: AsyncData,
  [DataType.Exposition]: AsyncData,
  [DataType.Participant]: AsyncData,
  [DataType.Participants]: AsyncData,
  [DataType.MainPrograms]: AsyncData,
  [DataType.Program]: AsyncData,
  [DataType.Pages]: AsyncData,
  [DataType.Events]: AsyncData,
  [DataType.Categories]: AsyncData,
  markersData: GoogleMapMarker[],
}

// Arrays
export type Participants = Participant[]
export type Programs = Program[]
export type MainPrograms = MainProgram[]
export type Categories = Category[]
export type Sponsors = Sponsor[]
export type SponsorCategories = SponsorCategory[]
export type Events = Event[]
export type Expositions = Exposition[]
export type Keywords = Keyword[]
export type MapMarkers = MapMarker[]

// Exposition
export interface Exposition {
  slug: string,
  name: string,
  description: string,
  web: string,
  webText: string,
  address: string,
  place: string,
  hour: string,
  hour2: string,
  startDate: string,
  endDate: string,
  images: string[],
  artists: WPPost[],
  curators: WPPost[],
  audioGuideSpotifyURL: string
  mainImg: WpImage,
}

// Participants
// From the participant wordpress endpoint
export interface SingleParticipant {
  name: string,
  slug: string,
  id: number,
  wpId: number,
  img: string,
  images: string[],
  keywords: ParticipantKeyWords,
  bio: string,
  workTitle: string,
  workDescription: string,
  expo: WPPost,
  related: ParticipantRelated,
}

export interface ParticipantKeyWords {
  id: number;
  name: string;
  slug: string;
}

export interface ParticipantRelated {
  id: number;
  name: string;
  slug: string;
}

export interface Participant {
  name: string,
  slug: string,
  id: number,
  wpId: number,
  img: string,
  images: WpImage[],
  keywords: string[],
}

// Activities/Events
export interface Event {
  id: number,
  slug: string,
  title: string,
  description: string,
  videoUrl: string,
  place: WPPost[],
  limitedTickets: boolean,
  date: DateObject,
  image: string,
  participants: WPPost[],
  program: WPPost[],
  summary: string,
}

// export interface Event {
//   id: number,
//   slug: string,
//   date: DateObject,
//   start: {
//     dateTime: any
//   },
//   summary: string,
// }

export interface DateObject {
  day: string,
  jsDate: Date,
  month: string,
  dateString: string,
  time: any
}

// Program
export interface Program {
  id: number;
  slug: string;
  name: string;
  text: string;
  images: any[];
  participants: any[];
  mainProgram: WPPost;
  events: WPPost[];
  date: DateObject;
}

export interface ProgramEvent {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  videoUrl: string;
  participants: string;
  limitedTickets: string;
  program: WPPost[];
  place: WPPost[];
  date: Date;
}

export interface MainProgram {
  id: number,
  slug: string,
  text: string,
  name: string,
  shortDescription: string
  images: WpImage[]
  events: WPPost[]
}

// Categories
export interface Category {
  name: string
  id: number,
  order: string,
  description: string,
  sponsors: Sponsors
}

// Sponsors
export interface Sponsor {
  name: string,
  logo: WpImage,
  author: number,
  order: number,
  category: SponsorCategory,
  url: string,
}

export interface SponsorCategory {
  name: string
  id: number,
  description: string,
}

// Page
export interface Page {
  id: number;
  date: string;
  date_gmt: string;
  guid: WPGuid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  content: WPContent;
  excerpt: WPExcerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  acf_fields: WPAcfFields;
  _links: WPLinks;
  // Added by selector
  video: string;
  abstract: string;
  title: string;
  dates: string;
  gallery: string[];
}

export interface PageGalleryImg {
  url: string
}

// Keywords
export interface Keyword {
  id: number,
  name: string,
  participants: Participants
}

// MapMarker
export interface MapMarker {
  [as : string]: any
}
