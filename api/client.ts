import Vue from "vue";
import axios from "axios";
import routes from "./routes";

const BASE_URL = "http://www.bienaldeartesmediales.cl/14/wp-json/wp/v2";

export const loadPages = () =>
  Vue.axios.get(routes.pages).then(response => {
    console.log('loadPages', response.data);
  });

export const loadPosts = () =>
  Vue.axios.get(routes.posts).then(response => {
    console.log('loadPosts', response.data);
  });

export const loadPost = (postId : number) =>
  Vue.axios.get(routes.post(postId)).then(response => {
    console.log('loadPost', postId, response.data);
  });

export default axios.create({
  baseURL: BASE_URL
});
