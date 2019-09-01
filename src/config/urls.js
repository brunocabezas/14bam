// All urls used on the Vue app are here
export default {
  futureHome: '/futureHome',
  home: '/',
  programs: '/programas',
  program: programName => `/programas/${programName}`,
  expositions: '/exposiciones',
  exposition: expoName => `/exposiciones/${expoName}`,
  participants: '/participantes',
  participant: name => `/participantes/${name}`,
  places: '/espacios',
  place: placeName => `/espacios/${placeName}`
}
