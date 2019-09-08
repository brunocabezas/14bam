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
  post: postId => `/post/${postId}`
}
