<template>
    <section class="section sponsors" v-if="!displayNewSponsors">
      <div
      class="sponsorsCategory"
      v-for="category in categories"
      v-bind:key="category.id"
    >
      <h1>{{category.name}}</h1>
      <div class="sponsor"
        v-for="sponsor in sponsors"
        v-bind:style="{
          'background-image': `url(${sponsor.logo.url})`,
          height: `${sponsor.logo.height}px`
        }"
        v-bind:key="sponsor.name"
      ></div>
    </div>
    </section>
      <section class="section sponsors" v-else>
      <div class="sponsor"
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
  props: {
    displayNewSponsors: {
      type: Boolean,
      default: false
    }
  },
  store,
  methods: {
    ...mapActions(['loadSponsors', 'loadWpCategories'])
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoadingSponsors',
      newSponsors: 'sponsors',
      oldSponsors: 'oldSponsors',
      categories: 'categoriesFromSponsors',
      sponsorsNotFetched: 'sponsorsNotFetched',
      categoriesNotFetched: 'categoriesNotFetched'
    })
  }
})
class Sponsors extends Vue {
  get sponsors () {
    return !this.displayNewSponsors ? this.newSponsors : this.oldSponsors
  }
  mounted () {
    if (this.sponsorsNotFetched) {
      this.loadSponsors().then(res => {
        if (this.categoriesNotFetched) {
          this.loadWpCategories()
        }
      })
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
