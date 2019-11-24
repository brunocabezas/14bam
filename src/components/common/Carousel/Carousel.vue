<template>
  <div :class="'carousel ' + className">
    <LightBox
      ref="lightbox"
      :showLightBox="false"
      :images="lightBoxData"
    ></LightBox>
    <vue-carousel
      :paginationEnabled="false"
      :perPage="1"
      :navigate-to="currentImage"
    >
      <slide v-bind:key="image.id" v-for="(image, index) in images">
        <button
          type="button"
          title="Ampliar imagen"
          class="carouselLightboxOverlay"
          @click="openLightbox(index)"
        >
          <ProgressiveImage :src="image"> </ProgressiveImage>
        </button>
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
          title="Siguiente imagen"
          class="carouselButton carouselButton--next"
          type="button"
          @keyup.right="goToNextItem"
          @click="goToNextItem"
        >
          <v-icon color="white" name="chevron-right" scale="1.5"> </v-icon>
        </button>
      </slide>
    </vue-carousel>
  </div>
</template>

<script src='./carousel.js'></script>

<style lang="stylus" scoped>
@import '../../../styles/constants.styl';

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

  .VueCarousel-slide
    position: relative;

  .carouselLightboxOverlay
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;

  .carouselButton
    z-index: 1;
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
@import '../../../styles/constants';
$carousel_height = 300px

.VueCarousel
  height: 100%;
  width: 100%;
  background-color: $purple;

  hr
    display: none;

  .loaderContainer, .carouselButton
    top: calc((300px / 2) - 13px);

  .carouselButton
    &.carouselButton--next
      right: 10px;

    &.carouselButton--prev
      left: 10px;

  .VueCarousel-wrapper
    position: relative;

  .VueCarousel-wrapper, .carouselImage, .VueCarousel-inner
    height: 300px !important;
    width: 100%;
    background-color: $purple;
</style>
