<template>
  <section class="section sponsors" v-if="displayNewSponsors">
    <Loader :loading="isLoading">
      <div
        v-bind:class="{
          sponsorsCategory: true,
          'sponsorsCategory--half-width': index < 2
        }"
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
              'background-image': `url(${
                index < 2
                  ? sponsor.logo.url
                  : sponsor.logo.sizes.medium
              })`,
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
<style lang="stylus" scoped src="./sponsors.styl"></style>
