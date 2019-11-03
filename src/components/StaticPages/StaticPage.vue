<template>
  <Loader :loading="isLoading">
    <h1 v-if="page && !hasMedia" class="pageTitle">{{ page.title }}</h1>
    <div
      v-if="page && !hasMedia"
      class="staticPageText"
      v-html="page.content.rendered"
    ></div>
    <div v-if="hasMedia" class="pageLayout">
      <div class="pageLeft">
        <Gallery
          v-if="page.gallery && page.gallery.length > 0"
          :images="page.gallery"
        />
        <VideoPlayer v-else-if="page.video" :url="page.video" />
      </div>
      <div class="pageRight">
        <h1 class="pageTitle">{{ page.title }}</h1>
        <div class="staticPageText" v-html="page.content.rendered"></div>
      </div>
    </div>
  </Loader>
</template>

<script src="./staticPage.js"></script>
