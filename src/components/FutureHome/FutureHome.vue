<template>
  <div class="home">
    <section class="homeTop">
      <img src="../Home/home.gif" alt />
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
      <TwoPrograms />
    </section>
    <section class="section agenda">
      <h1 class="sectionTitle">Agenda</h1>
      <Agenda />
    </section>
    <section class="section sponsors">
      <div
        class="sponsor"
        v-for="sponsor in sponsors"
        v-bind:style="{
          'background-image': `url(${sponsor.logo.url})`,
          height: `${sponsor.logo.height}px`
        }"
        v-bind:key="sponsor.name"
      ></div>
    </section>
  </div>
</template>

<script src="./futureHome.js" ></script>
<style src="../Home/home.styl" scoped lang="styl"></style>
