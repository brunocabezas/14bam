export default {
  pages : "/pages",
  posts : "/posts",
  post : (postId : number) : string => `/posts/${postId}`
}