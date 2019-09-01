export default {
  pages: '/pages',
  posts: '/posts',
  sponsors: '/sponsors',
  videos: '/videos',
  expositions: '/expositions',
  participants: '/participants',
  exposition: name => `/expositions?slug=${name}`,
  post: postId => `/posts/${postId}`
}
