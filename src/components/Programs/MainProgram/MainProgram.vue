<template>
  <Loader :loading="isLoading">
    <div class="program pageLayout">
      <div class="pageLeft">
        <mq-layout mq="lg">
        <div v-if="images.length > 0" class="programGallery">
          <Carousel :images="images" />
        </div>
        </mq-layout>
        <div
          v-if="program.events && program.events.length > 0"
          class="pageList programEvents"
        >
          <h2 class="pageListTitle">
            {{ displayActivities ? "Actividades" : "Programas" }}
          </h2>
          <ul class="pageListWrapper">
            <li
              class="pageListItem"
              v-bind:key="event.id"
              v-for="event in program.events"
            >
              <router-link
                :title="event.post_title"
                :to="urls[false ? 'event' : 'program'](event.post_name)"
              >
                {{ event.post_title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pageRight">
        <mq-layout :mq="['sm', 'md']">
          <div v-if="images.length > 0" class="programGallery">
            <Carousel :images="images" />
          </div>
        </mq-layout>
        <h1 class="pageTitle">{{ program.name }}</h1>
        <div v-html="program.text" class="programText"></div>

      </div>
    </div>
  </Loader>
</template>

<script src="./mainProgram.ts"></script>
<style src="./mainProgram.styl" lang="stylus"></style>
