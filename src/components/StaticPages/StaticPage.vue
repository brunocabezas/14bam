<template>
  <Loader :loading="isLoading">
    <h1 v-if="!hasMedia" class="pageTitle">{{ page.title }}</h1>
    <!-- Disply two columns layout if page has media  -->
    <div
      v-if="!hasMedia"
      class="staticPageText"
      v-html="page.content.rendered"
    ></div>
    <div else-if="hasMedia" class="pageLayout">
      <div class="pageLeft">
        <Carousel
          v-if="page.gallery && page.gallery.length > 0"
          :images="page.gallery"
        />
        <WebVideoPlayer v-else-if="page.video" :url="page.video" />
      </div>
      <div class="pageRight">
        <h1 class="pageTitle">{{ page.title }}</h1>
        <div class="staticPageText" v-html="page.content.rendered"></div>
      </div>
    </div>
  </Loader>
</template>

<script src="./staticPage.js"></script>
