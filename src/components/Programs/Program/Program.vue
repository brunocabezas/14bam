<template>
  <Loader :loading="isLoading">
    <div v-if="displayActivitiesInformation" class="program pageSingleLayout">
      <div v-if="program.mainProgram" class="pageTitleLink">
        <router-link
          :title="`Volver a ${program.mainProgram.post_name}`"
          :to="urls.mainProgram(program.mainProgram.post_name)"
        >
          <v-icon color="white" name="chevron-left" scale="1.4"></v-icon>
          {{ program.mainProgram.post_title }}</router-link
        >
      </div>
      <h1 class="pageTitle">{{ program.name }}</h1>
      <div class="activityList">
        <div
          class="activity"
          v-bind:key="event.id"
          v-for="event in program.events"
        >
          <router-link
            class="activityLink"
            :title="event.post_title || event.name"
            :to="urls.event(event.post_name || event.slug)"
          >
            <div class="activityName">
              {{ event.post_title || event.name }}
            </div>
            <div
              v-if="event.date && !isLoadingEvents"
              class="activityInformation"
            >
              {{ event.date.dateString }} | {{ event.date.time }}
              {{ event.place && "|" }}
              {{ event.place && event.place.post_title }}
            </div>
            <Loader size="20px" :loading="isLoadingEvents" />
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="program pageLayout">
      <div class="pageLeft">
        <mq-layout mq="lg">
          <div v-if="images.length > 0" class="programGallery">
            <Carousel :images="images" />
          </div>

          <div v-if="program.mainProgram" class="pageTitleLink">
            <router-link
              :title="`Volver a ${program.mainProgram.post_title}`"
              :to="urls.mainProgram(program.mainProgram.post_name)"
            >
              <v-icon color="white" name="chevron-left" scale="1.4"></v-icon>
              {{ program.mainProgram.post_title }}</router-link
            >
          </div>
        </mq-layout>

        <div
          v-if="program.participants && program.participants.length > 0"
          class="pageList programParticipants"
        >
          <h2 class="pageListTitle">Participantes</h2>
          <ul class="pageListWrapper">
            <li
              class="pageListItem"
              v-bind:key="person.id"
              v-for="person in program.participants"
            >
              <router-link
                :title="person.post_title"
                :to="urls.participant(person.post_name)"
              >
                {{ person.post_title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pageRight">
        <mq-layout :mq="['sm', 'md']">

          <div v-if="program.mainProgram" class="pageTitleLink">
            <router-link
              :title="`Volver a ${program.mainProgram.post_title}`"
              :to="urls.mainProgram(program.mainProgram.post_name)"
            >
              <v-icon color="white" name="chevron-left" scale="1.4"></v-icon>
              {{ program.mainProgram.post_title }}</router-link
            >
          </div>
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

<script src="./program.ts"></script>
<style src="./program.styl" lang="stylus"></style>
