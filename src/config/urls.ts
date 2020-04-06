// All urls used on the Vue app are here
export interface AppUrls {
  home: string,
  program: (itemName: string) => string,
  mainProgram : (itemName: string) => string,
  expositions: string,
  event: (itemName: string) => string,
  exposition: (itemName: string) => string,
  participants: string,
  participant: (itemName: string) => string,
  keyword: (itemName: string) => string,
  about: string,
  abstract: string,
  contest: string
}

const urls: AppUrls = {
  // futureHome: '/14/futuro',
  home: '/14/',
  // Program
  program: (programName: string) => `/14/programas/${programName}`,
  mainProgram: (programName: string) => `/14/programa/${programName}`,
  // Events belong to programs
  event: (eventName: string) => `/14/actividades/${eventName}`,
  // Expositions
  expositions: '/14/exposiciones',
  exposition: (expoName: string) => `/14/exposiciones/${expoName}`,
  // Participants
  participants: '/14/participantes',
  participant: (name: string) => `/14/participantes/${(name)}`,
  // Keywords
  keyword: (slug: string) => `/14/palabras-clave/${slug}`,
  // Static pages
  about: '/14/sobre-la-bienal',
  abstract: '/14/el-cuarto-mundo',
  contest: '/14/concurso-juan-downey'
}

export default urls
