<template>
  <Loader :loading="isLoading">
    <div class="mainPrograms">
      <div class="firstProgram mainProgramContainer">
        <div class="mainProgramContainerWrapper">
          <h2 class="programTitle">
            <router-link
              :title="firstProgram.name"
              :to="urls.mainProgram(firstProgram.slug)"
              >{{ firstProgram.name }}</router-link
            >
          </h2>
          <p class="programAbstract" v-html="firstProgram.shortDescription"></p>
        </div>
      </div>
      <div mq="lg" class="mainProgramsAnimation">
        <img :src="`${baseUrl}mainPrograms.gif`" alt="Animacion de logo" />
      </div>
      <div class="secondProgram mainProgramContainer">
        <div class="mainProgramContainerWrapper">
          <h2 class="programTitle">
            <router-link
              :title="secondProgram.name"
              :to="urls.mainProgram(secondProgram.slug)"
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

<script src="./mainPrograms.ts"></script>
<style lang="stylus" src="./mainPrograms.styl"></style>
