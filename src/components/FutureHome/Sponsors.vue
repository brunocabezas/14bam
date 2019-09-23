<template>
  <section class="section sponsors">
    <div
      class="sponsor"
      v-for="sponsor in sponsors"
      v-bind:style="{
        'background-image': `url(${sponsor.logo.url})`,
        height: `${sponsor.logo.height}px`
      }"
      v-bind:key="sponsor.name"
    ></div>
  </section>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import store from '@/config/store'
import { mapActions, mapGetters } from 'vuex'

@Component({
  store,
  methods: {
    ...mapActions(['loadSponsors'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingSponsors',
      sponsors: 'sponsors',
      sponsorsNotFetched: 'sponsorsNotFetched'
    })
  }
})
class Sponsors extends Vue {
  mounted () {
    if (this.sponsorsNotFetched) {
      this.loadSponsors()
    }
  }
}
export default Sponsors
</script>

<style lang="stylus" scoped>
.sponsors
  .sponsor
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;

    &:last-child
      margin: 40px 0 60px 0;

</style>
