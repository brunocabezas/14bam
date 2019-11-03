<template>
  <div class="expositionGallery">
    <Loader :loading="loading">
      <Carousel :images="images" />
    </Loader>
  </div>
</template>

<script src="./expositionGallery.js"></script>

<style lang="stylus" scoped>
.expositionGallery
  position relative
  min-height 300px
</style>
