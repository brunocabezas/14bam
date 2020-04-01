import { Exposition, Program, Category } from './types/types'
import { WPCategory } from './types/wordpressTypes'

// Fallback states are declared in this file

export const exposition: Exposition = {
  slug: '',
  name: '',
  description: '',
  place: '',
  hour: '',
  hour2: '',
  web: '',
  webText: '',
  startDate: '',
  endDate: '',
  mainImg: {
    url: '',
    sizes: { medium: '' }
  },
  images: [],
  artists: [],
  curators: [],
  audioGuideSpotifyURL: ''
}

export const program: Program = {
  id: -1,
  slug: '',
  text: '',
  name: '',
  events: [],
  mainProgram: {},
  date: {
    jsDate: new Date()
  },
  images: [],
  participants: []
}

export const category : Category = {
  id: 0,
  name: '',
  order: '',
  sponsors: []
}

export const wpCategory : WPCategory = {
  id: 0,
  name: '',
  term_id: 1,
  slug: ''
}
