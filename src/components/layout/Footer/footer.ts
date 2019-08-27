
import { Component, Vue } from "vue-property-decorator";
import SocialNetworks from "../../common/SocialNetworks.vue";

const mailChipBaseUrl = 'https://us11.api.mailchimp.com'
const mailChipUrl = `/3.0/lists/4459a2b85e/members`;

// const subscribe = 
@Component({
  components: {
    SocialNetworks
  }
})
export default class Footer extends Vue {
  mailInput: string = '';

  validateEmailInput = {

  }

  enterClicked() { 
    Vue.axios({
      baseURL: mailChipBaseUrl,
      method: 'post',
      url: mailChipUrl,
      data: { status: 'subscribed', email_address: "test@test.com" },
      headers: {
        Authorization: 'apikey <apikey>'
      }
    })
      .then((response) => {
        console.log(response)
      }).catch(err => console.log(err, err.message))
    // this.isOpen = !this.isOpen;
  }
}