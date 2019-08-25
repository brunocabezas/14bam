// All urls used on the Vue app are here
export default {
  home: '/',
  programs: '/programas',
  program: (programName: string) => `/programas/${programName}`,
  places: '/espacios',
  place: (placeName: string) => `/espacios/${placeName}`,
}