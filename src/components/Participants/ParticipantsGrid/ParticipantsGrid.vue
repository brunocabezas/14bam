<template>
  <div class="participantsGrid">
    <Loader :loading="isLoading">
      <div class="participants">
        <router-link
          class="participant"
          v-for="person in participants"
          :title="person.name"
          :to="urls.participant(person.slug)"
          v-bind:key="person.id"
          v-bind:style="{
            'background-image': person.img ? `url(${person.img})` : 'none'
          }"
        >
          <h3 v-html="person.name" class="participantName"></h3>
        </router-link>
      </div>
    </Loader>
  </div>
</template>

<script src="./participantsGrid.js"></script>
<style scoped lang="stylus" src="./participantsGrid.styl"></style>
