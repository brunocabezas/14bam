<template>
  <div class="participantsGrid">
    <Loader :loading="isLoading">
      <div class="participants">
        <div
          class="participant"
          v-for="person in participants"
          v-bind:key="person.id"
          v-bind:style="{
            'background-image': person.img ? `url(${person.img})` : 'none'
          }"
        >
          <h3 class="participantName">
            <router-link :title="person.name" :to="urls.participant(person.slug)">
              {{ person.name }}
            </router-link>
          </h3>
        </div>
      </div>
    </Loader>
  </div>
</template>

<script src="./participantsGrid.js"></script>
<style scoped lang="stylus" src="./participantsGrid.styl"></style>
