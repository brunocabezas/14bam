
import { Component, Vue } from 'vue-property-decorator'
import BurgerButton from 'vue-burger-button'
import SocialNetworks from '../../common/SocialNetworks.vue'
import 'vue-burger-button/dist/vue-burger-button.css'

@Component({
  components: {
    BurgerButton,
    SocialNetworks
  }
})
class Header extends Vue {
  isOpen = false

  toggleMenu () {
    this.isOpen = !this.isOpen
  }
}
export default Header
