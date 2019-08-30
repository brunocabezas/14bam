
import { Component, Vue } from "vue-property-decorator";
import { loadSponsors, loadVideos } from "../../../api/client";
import VideoPlayer from "./VideoPlayer.vue";

const getSponsorsFromApi = apiSponsors =>
  apiSponsors.map(sponsor => ({
    logo: sponsor.acf_fields && sponsor.acf_fields.logo,
    name: sponsor.title && sponsor.title.rendered || ''
  }));

@Component({
  components: {
    VideoPlayer
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

  mounted() {
    loadSponsors().then((response) => {
      this.sponsors = getSponsorsFromApi(response.data);
    });
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