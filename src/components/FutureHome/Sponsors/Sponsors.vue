<template>
  <section class="section sponsors" v-if="displayNewSponsors">
    <Loader :loading="isLoading">
      <div
        v-bind:class="{
          sponsorsCategory: true,
          'sponsorsCategory--half-width': index < 2}"
        v-for="(category, index) in categories"
        v-bind:key="category.id"
      >
        <!-- First two sponsors categories, have one sponsor -->

        <h1 class="sponsorsCategoryTitle">{{ category.name }}</h1>
        <div class="sponsorsCategoryGrid">
          <a
            class="sponsor"
            target="_blank"
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
    </Loader>
  </section>
  <section class="section sponsors" v-else>
    <Loader :loading="isLoading">
      <div
        class="sponsor"
        v-for="sponsor in sponsors"
        v-bind:style="{
          'background-image': `url(${sponsor.logo.url})`,
          height: `${sponsor.logo.height}px`
        }"
        v-bind:key="sponsor.name"
      ></div>
    </Loader>
  </section>
</template>

<script src="./sponsors.js"></script>
<style lang="stylus" scoped>
.sponsors
  margin-top 4em
  .loaderContainer
    .sponsorsCategory:first-child
      width: 50%;
      flex: 1;

    .sponsorsCategory
      &.sponsorsCategory--half-width
        padding 10px
        width 25%
        display inline-block

        .sponsorsCategoryGrid .sponsor
          display block !important
          width 100%

        &:nth-child(odd)
          margin-right 25%
          .sponsorsCategoryTitle
            text-align left

        &:nth-child(even)
          margin-left 25%

      .sponsorsCategoryTitle
        display: block;
        text-align: left;

      .sponsorsCategoryGrid
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        .sponsor
          margin: 2em 10px;
          max-height: 100px;
          box-sizing: border-box;
          display: inline-block;
          width: calc(20% - 20px);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
</style>
