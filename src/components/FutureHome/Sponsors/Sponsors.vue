<template>
  <section class="section sponsors" v-if="displayNewSponsors">
    <div
      class="sponsorsCategory"
      v-for="(category) in categories"
      v-bind:key="category.id"
    >
      <h1 class="sponsorsCategoryTitle">{{ category.name }}</h1>
      <div class="sponsorsCategoryGrid">
        <a
          class="sponsor"
          :href="sponsor.url"
          :title="sponsor.name"
          v-for="sponsor in category.sponsors"
          v-bind:style="{
            'background-image': `url(${sponsor.logo.sizes.medium ||
              sponsor.logo.url})`,
            height: `${sponsor.logo.height}px`
          }"
          v-bind:key="sponsor.id"
        >
        </a>
      </div>
    </div>
  </section>
  <section class="section sponsors" v-else>
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

<script src="./sponsors.js"></script>

<style lang="stylus" scoped>
.sponsors
  .sponsorsCategory
    .sponsorsCategoryTitle
      display: block;

    .sponsorsCategoryGrid
      display: flex;
      align-items center
      flex-wrap: wrap;
      justify-content flex-start

      .sponsor
        margin 2em 10px
        max-height 100px
        box-sizing border-box
        display inline-block
        width: calc(20% - 20px);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
</style>
