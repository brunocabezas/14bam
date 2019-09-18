<template>
  <div v-bind:class="{
    'socialNetworks': true,
    'isWhite' : isWhite
  }">
    <a
      class="socialNetworks__link"
      title="Facebook"
      href="https://www.facebook.com/BienalArtesMedialesChile"
      target="_blank">
      <v-icon
        name="brands/facebook"
        scale="1.5">
      </v-icon>
    </a>
    <a
      class="socialNetworks__link"
      title="Instagram"
      href="http://instagram.com/bienalartesmediales"
      target="_blank">
      <v-icon
        name="brands/instagram"
        scale="1.5">
      </v-icon>
    </a>
    <a
      class="socialNetworks__link"
      title="Canal de Youtube"
      href="https://www.youtube.com/channel/UCTfTJE1BO8aviqV9vrJT1LA"
      target="_blank">
      <v-icon
        name="brands/youtube"
        scale="1.5">
      </v-icon>
    </a>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Icon from '../../../node_modules/vue-awesome/components/Icon.vue'

@Component({
  components: {
    'v-icon': Icon
  },
  props: {
    isWhite: Boolean
  }
})
class SocialNetworks extends Vue {}
export default SocialNetworks

</script>

<style lang="stylus" scoped>
@import "../../styles/colors";

.socialNetworks
  color $white
  padding-top 15px

  &__link
    margin-right 10px
    margin-left 10px
    &:first-child
      margin-left 0
    &:last-child
      margin-right 0

  &.isWhite
    .fa-icon
      fill white
</style>
