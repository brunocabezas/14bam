
import { Component, Vue } from "vue-property-decorator";
import { loadSponsors } from '../../../api/client';

@Component
export default class Home extends Vue {
  // places : Array =  '[]';
  // programs : Array =  '[]';
  sponsors =  [];
  // slides : Array =  '[]';

  mounted() {
    loadSponsors().then(response => {
      this.sponsors = response.data;
    })
  }
}