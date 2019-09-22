<template>
  <Loader :loading="loadingData">
    <div class="expositionsGrid">
      <div
        class="exposition"
        v-for="exposition in expositions"
        v-bind:key="exposition.name"
      >
        <h3 class="expositionName">
          <router-link :to="urls.exposition(exposition.slug)">
            {{ exposition.name }}
          </router-link>
        </h3>
        <div class="expositionText">
          <p>{{ exposition.place }}</p>
          <p>
            {{ exposition.startDate }} {{ exposition.endDate && "al" }}
            {{ exposition.endDate }}
          </p>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script src="./expositionsGrid.js"></script>
<style scoped src="./expositionsGrid.styl" lang="stylus"></style>
