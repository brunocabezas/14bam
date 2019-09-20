<template>
  <Loader :loading="loadingData">
    <ExpositionInfoBar :expoId="participant.expo && participant.expo.ID" />
    <div class="participant">
      <div class="leftSection">
        <Carousel
          v-if="participant.images.length > 0"
          className="participanGallery"
          :images="participant.images"
        />
        <!-- <div
            v-bind:style="{ 'background-image': `url(${participant.img})` }"
          ></div> -->
        <div
          v-if="participant.expo && participant.expo.post_title"
          class="pageList participantExpo"
        >
          <h2 class="pageListTitle">Curatoria</h2>
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
        <!-- <div>RELACIONADOS</div> -->
      </div>
      <div class="rightSection">
        <h1 class="pageTitle">{{ participant.name }}</h1>
        <p v-html="participant.bio"></p>
        <h1 class="pageTitle">{{ participant.workTitle }}</h1>
        <p v-html="participant.workDescription"></p>
        <div class="keywords">
          <h3 class="keywordsTitle">Palabras claves</h3>
          <div class="keywordsParragraph">
            <p
              class="keyword"
              v-for="(key, index) in participant.keywords"
              v-bind:key="key.id"
            >
              <router-link class="keywordLink" :to="urls.keyword(key.name)">{{
                key.name
              }}</router-link
              >{{ (index !== participant.keywords.length - 1 && ", ") || "" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script src="./participant.js"></script>
<style src="./participant.styl" lang="stylus" scoped></style>
<style lang="stylus">
@import '../../../styles/colors'

.keywords
  .keywordsTitle
    margin-bottom 0
  .keywordsParragraph
    margin 10px 0
    .keyword
      margin 0 5px 0 0
      font-size: 14px;
      color: white;
      text-decoration: none;
      display: inline-block;

      &:last-child
        margin-right 0

      .keywordLink
        font-size: 14px;
        color: white;
        text-decoration: none;

        &:hover
          text-decoration: underline;

.participant
  .rightSection
    p
      color $white
</style>
