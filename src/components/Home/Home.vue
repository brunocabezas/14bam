<template>
<div class="home">
  <section class="videos">
    <VideoPlayer :url="video.url" />
  </section>
  <!-- <section class="places">
    grid of places
  </section>
  <section class="twoPrograms">
    two programs
  </section>
  <section class="program">
    single program
  </section> -->
  <section class="sponsors">
      <div 
        class="sponsor"
        v-for="sponsor in sponsors" 
        v-bind:style="{ 'background-image': `url(${sponsor.logo.url})`, height: `${sponsor.logo.height}px` }"
        v-bind:key="sponsor.name">
      </div>
  </section>
</div>
</template>

<script src="./home.js" ></script>
<style src="./home.styl" scoped lang="styl"></style>