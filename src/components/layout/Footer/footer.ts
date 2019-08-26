
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  mailInput : string = '';

  toggleMenu() {
    // this.isOpen = !this.isOpen;
  }
}