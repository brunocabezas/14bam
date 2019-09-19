
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import BurgerButton from 'vue-burger-button'
import SocialNetworks from '../../common/SocialNetworks.vue'
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
  urls = this.$root.urls

  isOpen = false

  displayMenuButton = true

  created () {
    document.addEventListener('keyup', this.closeMenuByKeyboard)
    document.addEventListener('scroll', this.handleScroll)
  }

  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('keyup', this.closeMenuByKeyboard)
  }

  closeMenuByKeyboard (event) {
    if (event.keyCode === 27 && this.isOpen) {
      // esc key pressed
      this.toggleMenu()
    }
    // console.log('this.toggleMenu')
  }

  handleScroll (evt, el) {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    if (!this.displayMenuButton && window.scrollY > viewportHeight - 100) {
      this.displayMenuButton = true
    } else if (this.displayMenuButton && window.scrollY < viewportHeight - 100) {
      this.displayMenuButton = false
    }
  }

  clickOutsideMenu (event) {
    if (this.isOpen) {
      const isBurgerButton = event.target.className.includes('burgerButton')
      const isBarElement = event.target.className.includes('bar')
      // Closing overlay by toggling the state
      if (!isBurgerButton && !isBarElement) {
        this.toggleMenu()
      }
    }
  }

  toggleMenu () {
    this.isOpen = !this.isOpen
  }
}
export default Header
