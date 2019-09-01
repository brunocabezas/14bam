<template>
  <div class="page participant">
    <div class="leftSection">
      <div
        v-bind:style="{ 'background-image': `url(${participant.img})` }"
        class="participanGallery"
      ></div>
      <div class="pageList participantExpo">
        <h2 class="pageListTitle">Curatoria</h2>
        <ul class="pageListWrapper">
          <li class="pageListItem">
            {{participant.expo}}
          </li>
        </ul>
      </div>
      <div>RELACIONADOS</div>
    </div>
    <div class="rightSection">
      <h1 class="pageTitle">{{ participant.name }}</h1>
      <p v-html="participant.bio"></p>
      <h1 class="pageTitle">{{ participant.workTitle }}</h1>
      <p v-html="participant.workDescription"></p>
    </div>
  </div>
</template>

<script src="./participant.js"></script>
<style src="./participant.styl" lang="stylus" scoped></style>
