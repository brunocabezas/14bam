<template>
  <Loader :loading="loadingData">
    <div class="expositionsGrid">
      <router-link
        :title="exposition.name"
        :to="urls.exposition(exposition.slug)"
        class="exposition"
        v-for="exposition in expositions"
        v-bind:key="exposition.name"
        v-bind:style="{
          'background-image':
            exposition.mainImg.sizes.medium || exposition.mainImg.url
              ? `url(${exposition.mainImg.sizes.medium ||
                  exposition.mainImg.url})`
              : 'none'
        }"
      >
        <div class="expositionOverlay">
          <h3 class="expositionName">
            {{ exposition.name }}
          </h3>
          <div class="expositionText">
            <p>{{ exposition.place }}</p>
            <p>
              {{ exposition.startDate }} {{ exposition.endDate && "al" }}
              {{ exposition.endDate }}
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </Loader>
</template>

<script src="./expositionsGrid.js"></script>
<style scoped src="./expositionsGrid.styl" lang="stylus"></style>
