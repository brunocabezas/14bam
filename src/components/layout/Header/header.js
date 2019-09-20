import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
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
  urls = this.$root.urls

  isOnHome = false

  displayElements = true

  isOpen = false

  @Watch('$route')
  onPropertyChanged (to, from) {
    // If is on home and scroll passdown the first section, show header
    this.isOnHome = to.name === 'futureHome'
    this.displayElements =
      to.name !== 'futureHome' ||
      window.scrollY > this.getViewportHeight() - 100
  }

  getViewportHeight () {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
  }

  created () {
    const isOnHome = this.$route.name === 'futureHome'
    this.isOnHome = isOnHome
    this.displayElements =
      !isOnHome || window.scrollY > this.getViewportHeight() - 100
    document.addEventListener('scroll', this.handleScroll)
    document.addEventListener('keyup', this.closeMenuByKeyboard)
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
  }

  handleScroll (evt, el) {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    // Only trigger header visibility changes on scroll at home
    if (this.isOnHome) {
      if (window.scrollY > viewportHeight - 100) {
        this.displayElements = true
      } else if (window.scrollY < viewportHeight - 100) {
        this.displayElements = false
      }
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
