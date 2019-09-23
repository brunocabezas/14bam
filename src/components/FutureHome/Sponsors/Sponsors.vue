<template>
    <section class="section sponsors" v-if="displayNewSponsors">
      <div
      class="sponsorsCategory"
      v-for="category in categories"
      v-bind:key="category.id"
    >
      <h1>{{category.name}}</h1>
      <div class="sponsor"
        v-for="sponsor in category.sponsors"
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

<script src="./sponsors.js"></script>

<style lang="stylus" scoped>
.sponsors
  .sponsor
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;

    &:last-child
      margin: 40px 0 60px 0;

</style>
