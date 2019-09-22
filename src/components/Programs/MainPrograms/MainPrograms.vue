<template>
  <Loader :loading="isLoading">
    <div class="mainPrograms">
      <div>
        <h2 class="programTitle">
          <router-link :to="urls.program(firstProgram.slug)">{{
            firstProgram.name
          }}</router-link>
        </h2>
        <p class="programAbstract" v-html="firstProgram.shortDescription"></p>
      </div>
      <div style="width:300px">
        <!-- <video
          width="300"
          height="600"
          name="Video Name"
          src="@/assets/programsGif.mov">
        </video> -->
      </div>
      <div>
        <h2 class="programTitle">
          <router-link :to="urls.program(secondProgram.slug)">{{
            secondProgram.name
          }}</router-link>
        </h2>
        <p class="programAbstract" v-html="secondProgram.shortDescription"></p>
      </div>
    </div>
  </Loader>
</template>

<script src="./mainPrograms.js"></script>
<style scoped lang="stylus">
@import '../../../styles/colors';

.mainPrograms
  display: inline-flex;
  padding: 15px;

  .programTitle
    text-decoration: underline;

    a
      font-size: 32px;

  .programAbstract
    text-align: left;
</style>
