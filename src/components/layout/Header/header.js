
import { Component, Vue } from 'vue-property-decorator'
import BurgerButton from 'vue-burger-button'
import SocialNetworks from '../../common/SocialNetworks.vue'
import urls from '@/config/urls'
import 'vue-burger-button/dist/vue-burger-button.css'

@Component({
  components: {
    BurgerButton,
    SocialNetworks
  },
  props: {
    isOnHome: Boolean
  }
})
class Header extends Vue {
  urls = urls

  isOpen = false

  created () {
    document.addEventListener('keyup', this.closeMenuByKeyboard)
  }

  destroyed () {
    document.removeEventListener('keyup', this.closeMenuByKeyboard)
  }

  closeMenuByKeyboard (event) {
    if (event.keyCode === 27 && this.isOpen) {
      // esc key pressed
      this.isOpen = !this.isOpen
    }
    // console.log('this.toggleMenu')
  }

  toggleMenu () {
    this.isOpen = !this.isOpen
  }
}
export default Header
