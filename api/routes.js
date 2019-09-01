export default {
  pages: '/pages',
  posts: '/posts',
  sponsors: '/sponsors',
  videos: '/videos',
  expositions: '/expositions',
  participants: '/participants',
  participant: slug => `/participants?slug=${slug}`,
  exposition: slug => `/expositions?slug=${slug}`,
  post: postId => `/posts/${postId}`
}
