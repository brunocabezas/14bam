<template>
  <div class="home">
    <div class="homeTop">
      <img src="../Home/home.gif" alt />
    </div>
    <!-- <section class="places">
    grid of places
  </section>
  <section class="twoPrograms">
    two programs
  </section>
  <section class="program">
    single program
    </section>-->
    <div class="sections">
      <section class="section expositions">
        <h1 class="sectionTitle">Exposiciones</h1>
        <div class="expositionsGrid">
          <div
            class="exposition"
            v-for="exposition in expositions"
            v-bind:key="exposition.name"
          >
            <h3 class="expositionName">{{ exposition.name }}</h3>
            <div class="expositionText">
              <p>{{exposition.place}}</p>
              <p>{{exposition.hour}}</p>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script src="./futureHome.js" ></script>
<style src="../Home/home.styl" scoped lang="styl"></style>
