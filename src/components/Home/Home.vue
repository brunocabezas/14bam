<template>
<div class="home">
  <div class="homeTop">
    <img src="./home.gif" alt="">
  </div>
  <!-- <section class="places">
    grid of places
  </section>
  <section class="twoPrograms">
    two programs
  </section>
  <section class="program">
    single program
  </section> -->
  <div class="sections">
    <section class="sponsors">
        <div 
          class="sponsor"
          v-for="sponsor in sponsors" 
          v-bind:style="{ 'background-image': `url(${sponsor.logo.url})`, height: `${sponsor.logo.height}px` }"
          v-bind:key="sponsor.name">
        </div>
    </section>
  </div>
</div>
</template>

<script src="./home.js" ></script>
<style src="./home.styl" scoped lang="styl"></style>