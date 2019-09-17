
const CALENDAR_API_KEY = process.env.VUE_APP_CALENDAR_API_KEY || ''
const CALENDAR_ID = process.env.VUE_APP_CALENDAR_ID || ''
const GOOGLE_GEO_API = process.env.VUE_APP_GOOGLE_GEO_API || ''

if (!CALENDAR_API_KEY) {
  console.warn('Unvalid calendar API key, programs calendars will not be displayed')
}

if (!CALENDAR_ID) {
  console.warn('Unvalid google calendar id, home agenda will not be displayed')
}

console.log(process.env)

export default {
  pages: '/pages',
  posts: '/posts',
  sponsors: '/sponsors?per_page=100',
  videos: '/videos?per_page=100',
  expositions: '/expositions?per_page=100',
  exposition: slug => `/expositions?slug=${slug}`,
  participants: '/participants?per_page=100',
  participant: slug => `/participants?slug=${slug}`,
  // General programs contain regular programs
  generalPrograms: '/programaGeneral?per_page=100',
  generalProgram: slug => `/programaGeneral?slug=${slug}`,
  // Regular programs
  program: slug => `/programs?slug=${slug}`,
  programCalendar: googleCalendarId =>
    `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${CALENDAR_API_KEY}`,
  calendar: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${CALENDAR_API_KEY}`,
  // Not used
  post: postId => `/post/${postId}`,
  markerData: address => `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_GEO_API}&address=${address}`,
  taxonomy: id => `/tags`
  // taxonomy: id => '/participants?filter[post_tag]=chano'
}
