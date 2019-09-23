<template>
  <div class="home">
    <section class="section videos">
      <VideoPlayer :url="video.url" />
    </section>
    <section class="section expositions">
      <h1 class="sectionTitle">
        <router-link :to="urls.expositions">Exposiciones</router-link>
      </h1>
      <ExpositionsGrid />
    </section>
    <section class="section programs">
      <h1 class="sectionTitle">
        <router-link :to="urls.programs">Programas</router-link>
      </h1>
      <MainPrograms />
    </section>
    <section class="section halfSections agenda">
      <div class="sectionLeft">
        <h1 class="sectionTitle">Agenda</h1>
        <Agenda />
      </div>
      <div class="sectionRight">
        <h1 class="sectionTitle">Mapa</h1>
        <Map />
      </div>
    </section>
    <Sponsors />
  </div>
</template>

<script src="./futureHome.js" ></script>
<style src="../Home/home.styl" scoped lang="styl"></style>
<style lang="stylus">
.section.videos
  .videoPlayer
    display inline-block
    #vimeo-player-1
      &, iframe
        width 100%
        height 100%

</style>
