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
    ID: 0,
    id: 0,
    title: '100 es un color20',
    filename: '100-es-un-color20.jpg',
    url: 'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/100-es-un-color20.jpg',
    alt: '',
    author: '4',
    description: '',
    caption: '',
    name: '100-es-un-color20',
    date: '2019-10-17 00:32:11',
    modified: '2019-10-17 00:32:18',
    mime_type: 'image/jpeg',
    type: 'image',
    icon: 'http://www.bienaldeartesmediales.cl/14/wp-includes/images/media/default.png',
    width: 0,
    height: 0,
    sizes: {
      thumbnail: '',
      'thumbnail-width': 0,
      'thumbnail-height': 0,
      medium: '',
      'medium-width': 0,
      'medium-height': 0,
      medium_large: '',
      'medium_large-width': 0,
      'medium_large-height': 0,
      large: '',
      'large-width': 0,
      'large-height': 0
    }
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

export const category: Category = {
  id: 0,
  name: '',
  order: '',
  sponsors: []
}

export const wpCategory: WPCategory = {
  id: 0,
  name: '',
  term_id: 1,
  slug: ''
}
