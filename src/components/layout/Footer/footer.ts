
import { Component, Vue } from "vue-property-decorator";
import SocialNetworks from "../../common/SocialNetworks.vue";

@Component({
  components: {
    SocialNetworks
  }
})
export default class Footer extends Vue {
  mailInput : string = '';

  toggleMenu() {
    // this.isOpen = !this.isOpen;
  }
}