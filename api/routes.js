export default {
  pages: '/pages',
  posts: '/posts',
  sponsors: '/sponsors',
  videos: '/videos',
  expositions: '/expositions',
  exposition: slug => `/expositions?slug=${slug}`,
  participants: '/participants',
  participant: slug => `/participants?slug=${slug}`,
  // General programs contain regular programs
  generalPrograms: '/programaGeneral',
  generalProgram: slug => `/programaGeneral?slug=${slug}`,
  // Regular programs
  program: slug => `/programs?slug=${slug}`,
  post: postId => `/posts/${postId}`
}
