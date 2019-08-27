export default {
  pages : "/pages",
  posts : "/posts",
  sponsors : "/sponsors",
  videos : "/videos",
  post : (postId : number) : string => `/posts/${postId}`
}