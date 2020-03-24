// All urls used on the Vue app are here
export default {
  futureHome: '/14/futuro',
  home: '/14/',
  program: (programName: string) => `/14/programas/${programName}`,
  mainProgram: (programName: string) => `/14/programa/${programName}`,
  // Events belong to programs
  event: (eventName: string) => `/14/actividades/${eventName}`,
  // Expositions
  expositions: '/14/exposiciones',
  exposition: (expoName : string) => `/14/exposiciones/${expoName}`,
  // Participants
  participants: '/14/participantes',
  participant: (name : string) => `/14/participantes/${(name)}`,
  keyword: (slug: string) => `/14/palabras-clave/${slug}`,
  // places: '/14/espacios',
  // place: placeName => `/14/espacios/${placeName}`,
  about: '/14/sobre-la-bienal',
  abstract: '/14/el-cuarto-mundo',
  contest: '/14/concurso-juan-downey'
}
