<template>
  <Loader :loading="loadingData">
    <div class="exposition">
      <ul class="expositionInfo">
        <li class="expositionInfoItem">
          {{ exposition.place }}
        </li>
        <li
          v-if="exposition.startDate && exposition.endDate"
          class="expositionInfoItem"
        >
          {{ exposition.startDate }}
          {{ exposition.endDate }}
        </li>
        <li v-if="exposition.hour" class="expositionInfoItem">
          {{ exposition.hour }}
        </li>
        <li v-if="exposition.hour2" class="expositionInfoItem">
          {{ exposition.hour2 }}
        </li>
        <li
          v-if="exposition.address || exposition.web"
          class="expositionInfoItem"
        >
          <span>
            {{ exposition.address }}
            <br/>
            <a target="_blank" class="link" :href="exposition.web">{{
              exposition.web
            }}</a>
          </span>
        </li>
      </ul>

      <div class="expositionLayout">
        <div class="leftSection">
          <h1 class="expositionTitle">{{ exposition.name }}</h1>
          <p v-html="exposition.description"></p>
        </div>

        <div class="rightSection">
          <div class="expositionGallery"></div>
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
      </div>
    </div>
  </Loader>
</template>

<script src="./exposition.js"></script>
<style src="./exposition.styl" lang="stylus"></style>
