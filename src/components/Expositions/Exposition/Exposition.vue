<template>
  <Loader :loading="loadingData">
    <div class="exposition">

      <ExpositionInfoBar :expo="exposition" />

      <div class="pageLayout">
        <div class="pageLeft">
          <div class="expositionGallery">
            <ExpositionGallery v-if="exposition && exposition.slug" :slug="exposition.slug" />
          </div>
          <div
            v-if="exposition.artists.length > 0"
            class="pageList expositionArtists"
          >
            <h2 class="pageListTitle">Artistas</h2>
            <ul class="pageListWrapper">
              <li
                class="pageListItem"
                v-bind:key="artist.id"
                v-for="artist in exposition.artists"
              >
                <router-link
                  :title="artist.post_title"
                  :to="urls.participant(artist.post_name)">
                  {{ artist.post_title }}
                </router-link >
              </li>
            </ul>
          </div>

          <div
            v-if="exposition.curators.length > 0"
            class="pageList expositionCurators"
          >
            <h2 class="pageListTitle">Curadores</h2>
            <ul class="pageListWrapper">
              <li
                class="pageListItem"
                v-bind:key="curator.id"
                v-for="curator in exposition.curators"
              >
                <router-link
                  :title="curator.post_title"
                  :to="urls.participant(curator.post_name)">
                  {{ curator.post_title }}
                </router-link >
              </li>
            </ul>
          </div>
        </div>

        <div class="pageRight">
          <h1 class="expositionTitle pageTitle">{{ exposition.name }}</h1>
          <p class="expositionText" v-html="exposition.description"></p>
        </div>

      </div>
    </div>
  </Loader>
</template>

<script src="./exposition.js"></script>
<style src="./exposition.styl" lang="stylus"></style>
