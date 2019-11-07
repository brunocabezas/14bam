<template>
  <div class="home">
    <section class="section videos">
      <div class="videosOverlay"></div>
      <VideoPlayer :url="video.url" />
    </section>
    <section class="section abstract">
      <div class="abstractWrapper">
        <div class="abstractWrapperLeft">
          <h1 class="abstractTitle">
            <router-link :title="abstractPage.title" :to="urls.abstract">{{
              abstractPage.title
            }}</router-link>
          </h1>
          <p class="abstractDates">{{ abstractPage.dates }}</p>
        </div>
        <div class="abstractWrapperRight">
          <p class="sectionText" v-html="abstractPage.abstract"></p>
        </div>
      </div>
    </section>
    <section class="section expositions">
      <h1 class="sectionTitle">
        <!-- <router-link :to="urls.expositions">Exposiciones</router-link> -->
      </h1>
      <ExpositionsGrid />
    </section>
    <section class="section programs">
      <h1 :style="{marginBottom: '10px' }" class="sectionTitle">Programas</h1>
      <MainPrograms />
    </section>
    <section class="section halfSections agenda map">
      <div class="sectionLeft">
        <h1 class="sectionTitle">Agenda</h1>
        <Agenda />
      </div>
      <div class="sectionRight">
        <h1 class="sectionTitle">Mapa</h1>
        <Map />
      </div>
    </section>
    <Sponsors displayNewSponsors />
  </div>
</template>

<script src="./futureHome.js" ></script>
<style src="./home.styl" lang="styl"></style>
<style lang="stylus">
.section.videos
  position: relative;

  .loaderContainer
    flex: 0.1 1 0%;
    max-height: 100%;

  .videoPlayer
    display: inline-block;

    #vimeo-player-1
      &, iframe
        width: 100%;
        height: 100%;

  .videosOverlay
    position: absolute;
    z-index: 2;
    width: 100%;
    bottom: 0;
    height: 40%;
    left: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 12%, rgba(52, 66, 132, 1) 100%);
</style>
