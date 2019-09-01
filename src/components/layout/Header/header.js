
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
  },
  data () {
    return {
      urls
    }
  }
})
class Header extends Vue {
  isOpen = false

  toggleMenu () {
    this.isOpen = !this.isOpen
  }
}
export default Header
