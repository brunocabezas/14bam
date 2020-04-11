// Messages or mutation types are defined here
// this are used by vuex to modify state data
//
// important:
// the mutation type will work only if a state node
// with the same name is defined

const mutationTypes = {
  EXPOSITIONS: 'EXPOSITIONS',
  EXPOSITION: 'EXPOSITION',
  PARTICIPANTS: 'PARTICIPANTS',
  PARTICIPANT: 'PARTICIPANT',
  MAIN_PROGRAMS: 'MAIN_PROGRAMS',
  PROGRAM: 'PROGRAM',
  SPONSORS: 'SPONSORS',
  PAGES: 'PAGES',
  ACTIVITIES: 'ACTIVITIES',
  CATEGORIES: 'CATEGORIES'
}

// TODO Define how to use mutationTypes to generate DataType
// Wordpress data types
export enum DataType {
  Expositions = 'expositions',
  Exposition = 'exposition',
  Participants = 'participants',
  Participant = 'participant',
  MainPrograms = 'main_programs',
  Program = 'program',
  Sponsors = 'sponsors',
  Pages = 'pages',
  // TODO update string to 'events'
  Activities = 'activities',
  Categories = 'categories'
}

export default mutationTypes
