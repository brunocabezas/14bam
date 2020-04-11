
const GOOGLE_GEO_API : string = process.env.VUE_APP_GOOGLE_GEO_API || ''

if (!GOOGLE_GEO_API) {
  console.warn('Unvalid google geo api key, home map markers will not be displayed')
}

export default {
  pages: '/pages',
  posts: '/posts',
  categories: '/categories?per_page=100',
  sponsors: '/sponsors?per_page=100',
  videos: '/videos?per_page=100',
  expositions: '/expositions?per_page=100',
  exposition: (slug: string) => `/expositions?slug=${slug}`,
  participants: '/participants?per_page=100',
  participant: (slug: string) => `/participants?slug=${slug}`,
  // Programs
  mainPrograms: '/programaGeneral?per_page=100',
  // Regular programs
  program: (slug: string) => `/programs?slug=${slug}`,
  programActivities: '/activities?per_page=100',
  markerData: (address: string) => `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_GEO_API}&address=${address}`,
  // Not used
  // calendar: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_API_KEY}`,
  // programCalendar: googleCalendarId =>
  //  `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${CALENDAR_API_KEY}`,
  post: (postId: string) => `/post/${postId}`,
  taxonomy: () => `/tags`,
  generalProgram: (slug: string) => `/programaGeneral?slug=${slug}`
}
