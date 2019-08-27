<template>
  <div v-bind:class="{
    'socialNetworks': true,
    'isWhite' : isWhite
  }">
    <a class="socialNetworks__link" href="" target="_blank">
      <v-icon 
        name="brands/facebook"
        scale="1.5"
        title="Vue.js">
      </v-icon>
    </a>
    <a class="socialNetworks__link" href="" target="_blank">
      <v-icon
        name="brands/twitter"
        scale="1.5"
        title="Vue.js">
      </v-icon>
    </a>
  </div>
</template>

<script>
import { Vue, Component, Props } from "vue-property-decorator";
import Icon from "../../../node_modules/vue-awesome/components/Icon.vue";

@Component({
  components: {
    "v-icon": Icon
  }, 
  props : {
    isWhite: Boolean
  }
})
export default class SocialNetworks extends Vue {
}
</script>

<style lang="stylus" scoped>
@import "../../styles/colors";

.socialNetworks
  color $white
  &__link
    margin-right 15px

  &.isWhite
    .fa-icon
      fill white
    
</style>
