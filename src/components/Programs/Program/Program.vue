<template>
  <Loader :loading="loadingData">
    <div class="program">
      <div class="leftSection">
        <h1>{{ program.name }}</h1>
        <div v-html="program.text" class="programText"></div>
      </div>
      <div class="rightSection">
        <div class="programGallery"></div>

        <div
          v-if="program.events && program.events.length > 0"
          class="pageList programEvents"
        >
          <h2 class="pageListTitle">Programas</h2>
          <ul class="pageListWrapper">
            <li
              class="pageListItem"
              v-bind:key="event.id"
              v-for="event in program.events"
            >
              <router-link
                :title="event.post_title"
                :to="urls.event(event.post_name)"
              >
                {{ event.post_title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script src="./program.js"></script>
<style src="./program.styl" lang="stylus"></style>
