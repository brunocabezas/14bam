<template>
  <div :class="'carousel ' + className">
    <vue-carousel
      :paginationEnabled="false"
      :perPage="1"
      :navigate-to="currentImage"
    >
      <slide v-bind:key="image" v-for="image in images">
        <progressive-background :placeholder="image" :src="image">
          <div
            v-bind:class="{
              'imageLoaderContainer--loading': visible,
              'imageLoaderContainer': true
            }"
            slot="content"
            slot-scope="{ visible }"
          >
            <Loader :loading="visible" />
          </div>
        </progressive-background>
      </slide>
    </vue-carousel>
    <button
      v-if="images.length > 1"
      title="Imagen anterior"
      class="carouselButton carouselButton--prev"
      type="button"
      @click="goToPrevItem"
    >
      <v-icon color="white" name="chevron-left" scale="1.5"> </v-icon>
    </button>
    <button
      v-if="images.length > 1"
      title="Imagen siguiente"
      class="carouselButton carouselButton--next"
      type="button"
      @click="goToNextItem"
    >
      <v-icon color="white" name="chevron-right" scale="1.5"> </v-icon>
    </button>
  </div>
</template>

<script src='./carousel.js'></script>

<style lang="stylus" scoped>
$height = 300px;

.carousel
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: $height;

  hr
    display: none;

  .carouselButton--next
    right: 0;

  .carouselButton--prev
    left: 0;

  .carouselButton
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;

  .carouselImage
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
</style>

<style lang="stylus">
@import '../../../styles/colors';

$height = 300px;

.VueCarousel
  height: 100%;
  width: 100%;
  background-color: $purple;

  hr
    display none

  .loaderContainer
    top: calc((300px / 2));

  .VueCarousel-wrapper, .carouselImage, .VueCarousel-inner
    height: $height !important;
    width: 100%;
    background-color: $purple;
</style>
