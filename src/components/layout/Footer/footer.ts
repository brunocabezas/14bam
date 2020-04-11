
import { Component, Vue } from 'vue-property-decorator'
import SocialNetworks from '../../common/SocialNetworks.vue'

@Component({
  components: {
    SocialNetworks
  }
})
class Footer extends Vue {
  subscribeURL = 'https://bienaldeartesmediales.us11.list-manage.com/subscribe/post?u=21121cf28dc5ae821ecbf30c9&amp;id=4459a2b85e'
}
export default Footer
