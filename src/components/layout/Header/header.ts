import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BurgerButton from 'vue-burger-button'
import SocialNetworks from '../../common/SocialNetworks.vue'
import 'vue-burger-button/dist/vue-burger-button.css'
import urls, { AppUrls } from '@/config/urls'
import { Route } from 'vue-router'

enum VueMqMediaQuery {
  SM = 'sm',
  LG = 'lg',
  MD = 'md',
}

@Component({
  components: {
    BurgerButton,
    SocialNetworks
  }
})
class Header extends Vue {
  programURL = 'http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/programa14bienal.pdf'
  urls : AppUrls = urls;
  isOnHome : boolean = false
  displayElements : boolean = true
  isOpen : boolean = false

  // Global media query object available by vue-mq
  $mq!: VueMqMediaQuery

  get scrollBreakpoint () {
    return this.$mq === VueMqMediaQuery.SM ? 300 : 100
  }

  get viewportHeight () {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
  }

  @Watch('$route')
  onPropertyChanged (to : Route, from : Route) {
    // If is on home and scroll passdown the first section, show header
    this.isOnHome = to.name === 'home'
    this.displayElements =
      to.name !== 'home' ||
      window.scrollY > this.viewportHeight - this.scrollBreakpoint
  }

  created () {
    // const isOnFutureHome = this.$route.name === 'futureHome'
    this.isOnHome = this.$route.name === 'home'
    // this.isOnFutureHome = isOnFutureHome
    this.displayElements =
      this.$route.name !== 'home' ||
      window.scrollY > this.viewportHeight - this.scrollBreakpoint
    document.addEventListener('scroll', this.handleScroll)
    document.addEventListener('keyup', this.closeMenuByKeyboard)
  }

  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('keyup', this.closeMenuByKeyboard)
  }

  closeMenuByKeyboard (event : KeyboardEvent) {
    if (event.keyCode === 27 && this.isOpen) {
      // esc key pressed
      this.toggleMenu()
    }
  }

  handleScroll () : void {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    // Only trigger header visibility changes on scroll at home
    if (this.isOnHome) {
      if (window.scrollY > viewportHeight - this.scrollBreakpoint) {
        this.displayElements = true
      } else if (window.scrollY < viewportHeight - this.scrollBreakpoint) {
        this.displayElements = false
      }
    }
  }

  // TODO improve type definition of event
  clickOutsideMenu (event: MouseEvent | any) {
    if (this.isOpen) {
      const isBurgerButton = event.target && event.target.className.includes('burgerButton')
      const isBarElement = event.target && event.target.className.includes('bar')
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
