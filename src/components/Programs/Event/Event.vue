<template>
  <Loader :loading="isLoading">
    <ExpositionInfoBar v-if="event.place" :expoSlug="event.place.post_name" />
    <div class="event pageLayout">
      <div class="pageLeft">
        <ProgressiveImage v-if="event.image" :src="event.image" />
        <WebVideoPlayer v-else-if="event.videoUrl" :url="event.videoUrl" />
        <div
          v-if="event.participants && event.participants.length > 0"
          class="pageList"
        >
          <h2 class="pageListTitle">Participantes</h2>
          <ul class="pageListWrapper">
            <li
              class="pageListItem"
              v-bind:key="artist.id"
              v-for="artist in event.participants"
            >
              <router-link
                :title="artist.post_title"
                :to="urls.participant(artist.post_name)"
              >
                {{ artist.post_title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pageRight">
        <h1 class="pageTitle">{{ event.name }}</h1>
        <div v-html="event.description"></div>
      </div>
    </div>
  </Loader>
</template>

<script src="./event.ts"></script>
<style lang="stylus" scoped>
.event
  .eventImage
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
</style>
