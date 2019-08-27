
import { Component, Vue } from "vue-property-decorator";
import { loadSponsors, loadVideos } from "../../../api/client";
import VideoPlayer from "./VideoPlayer.vue";

@Component({
  components: {
    VideoPlayer,
  }
})
export default class Home extends Vue {
  // places : Array =  "[]";
  // programs : Array =  "[]";
  sponsors = [];
  videos = [];
  video = {
    id: 0,
    url: ""
  };
  // slides : Array =  "[]";

  mounted() {
    loadSponsors();
    loadVideos().then((response) => {
      const { data } = response;
      this.videos = data;
      if (data[0]) {
        this.video = {
          id: data[0].id,
          url: data[0].acf_fields && data[0].acf_fields.url,
        };
      }
    }).catch(res => console.log("loadVideosError", res))
  }
}