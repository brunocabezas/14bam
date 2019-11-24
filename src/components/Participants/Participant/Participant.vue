<template>
  <Loader :loading="loadingData">
    <ExpositionInfoBar v-if="expositionSlug" :expoSlug="expositionSlug" />
    <div class="participant pageLayout">
      <div class="pageLeft">
        <mq-layout mq="lg">
          <Carousel
            v-if="participant.images.length > 0"
            className="participanGallery"
            :images="participant.images"
          />
        </mq-layout>
        <div
          v-if="participant.expo && participant.expo.post_title"
          class="pageList participantExpo"
        >
          <h2 class="pageListTitle">Curatoría</h2>
          <ul class="pageListWrapper">
            <li class="pageListItem">
              <router-link
                :title="participant.expo.post_title"
                :to="urls.exposition(participant.expo.post_name)"
              >
                {{ participant.expo.post_title }}
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Related pariticpants -->
        <div
          v-if="participant.related.length > 0"
          class="pageList participantRelated"
        >
          <h2 class="pageListTitle">Relacionados</h2>
          <ul class="pageListWrapper">
            <li
              v-for="participant in participant.related"
              v-bind:key="participant.id"
              class="pageListItem"
            >
              <router-link
                :title="participant.name"
                :to="urls.participant(participant.slug)"
              >
                {{ participant.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pageRight">
        <mq-layout :mq="['sm', 'md']">
          <Carousel
            v-if="participant.images.length > 0"
            className="participanGallery"
            :images="participant.images"
          />
        </mq-layout>

        <h1 v-html="participant.name" class="pageTitle"></h1>
        <p v-html="participant.bio"></p>

        <h1 class="pageTitle">{{ participant.workTitle }}</h1>
        <p v-html="participant.workDescription"></p>

        <div class="keywords" v-if="participant.keywords.length > 0">
          <h3 class="keywordsTitle">Palabras claves</h3>
          <div class="keywordsParragraph">
            <p
              class="keyword"
              v-for="(key, index) in participant.keywords"
              v-bind:key="key.id"
            >
              <router-link
                :title="key.name"
                class="keywordLink"
                :to="urls.keyword(key.name)"
                >{{ key.name }}</router-link
              >{{ (index !== participant.keywords.length - 1 && ", ") || "" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script src="./participant.js"></script>
<style scoped lang="stylus">
@import '../../../styles/colors';

.keywords
  .keywordsTitle
    margin-bottom: 0;

  .keywordsParragraph
    margin: 10px 0;

    .keyword
      margin: 0 5px 0 0;
      font-size: 14px;
      color: white;
      text-decoration: none;
      display: inline-block;

      &:last-child
        margin-right: 0;

      .keywordLink
        font-size: 14px;
        color: white;
        text-decoration: none;
        font-family: 'Roboto Mono', monospace;

        &:hover
          text-decoration: underline;
</style>
