<template>
  <Loader :loading="isLoading">
    <div class="mainPrograms">
      <div class="firstProgram mainProgramContainer">
        <div class="mainProgramContainerWrapper">
          <h2 class="programTitle">
            <router-link
              :title="firstProgram.name"
              :to="urls.program(firstProgram.slug)"
              >{{ firstProgram.name }}</router-link
            >
          </h2>
          <p class="programAbstract" v-html="firstProgram.shortDescription"></p>
        </div>
      </div>
      <div class="mainProgramsAnimation">
        <img :src="`${publicPath}mainPrograms.gif`" alt="Animacion de logo" />
      </div>
      <div class="mainProgramContainer">
        <div class="mainProgramContainerWrapper">
          <h2 class="programTitle">
            <router-link
              :title="secondProgram.name"
              :to="urls.program(secondProgram.slug)"
              >{{ secondProgram.name }}</router-link
            >
          </h2>
          <p
            class="programAbstract"
            v-html="secondProgram.shortDescription"
          ></p>
        </div>
      </div>
    </div>
  </Loader>
</template>

<script src="./mainPrograms.js"></script>
<style lang="stylus">
@import '../../../styles/colors';

.mainPrograms
  display: inline-flex;
  padding: 15px;
  height: 80%;

  > div
    flex: 1;
    justify-content: center;
    align-items: center;

    &.mainProgramsAnimation
      max-width: 360px;

      img
        width: 100%;

    &.mainProgramContainer
      min-width: 375px;
      padding: 3em;
      text-align: left;
      display: flex;
      align-items: center;

  .programTitle
    &:hover a
      text-decoration: underline;

    a
      text-decoration: none;
      font-size: 32px;

  .programAbstract
    text-align: left;

    p
      color: $white;
</style>
