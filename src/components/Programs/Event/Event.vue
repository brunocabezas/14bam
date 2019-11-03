<template>
  <Loader :loading="isLoading">
    <ExpositionInfoBar v-if="event.place" :expoSlug="event.place.post_name"/>
    <div class="event pageLayout">
      <div class="pageLeft">
        <!-- <div>media</div> -->
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

<script src="./event.js"></script>
