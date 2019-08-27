
import { Component, Vue } from "vue-property-decorator";
import BurgerButton from 'vue-burger-button';
import 'vue-burger-button/dist/vue-burger-button.css';

@Component({
  components: {
    BurgerButton
  }
})
export default class Header extends Vue {
  isOpen : boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}