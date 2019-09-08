<template>
  <Loader :loading="loadingData">
    <ExpositionInfo :expoId="participant.expo && participant.expo.ID"/>
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
          <div v-if="participant.expo && participant.expo.post_title" class="pageList participantExpo">
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
        </div>
    </div>
  </Loader>
</template>

<script src="./participant.js"></script>
<style src="./participant.styl" lang="stylus" scoped></style>
