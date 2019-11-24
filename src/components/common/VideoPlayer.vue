<template>
  <div class="videoPlayer">
    <!-- <Loader :loading="loading"></Loader> -->
    <div v-if="bannerUrl" class="bannerContainer">
      <img :src="bannerUrl" alt="" />
    </div>
    <video-player
      v-else
      ref="videoPlayer"
      :playsinline="true"
      class="video-player-box"
      :options="playerOptions"
    >
    </video-player>
    <button
      v-if="!bannerUrl"
      type="button"
      :title="toggleAudioTitle"
      class="videoPlayerVolumeButton"
      @click="toggleAudio"
    >
      <v-icon color="white" :name="volumeIcon" scale="1.5"> </v-icon>
    </button>
  </div>
</template>

<script src="./videoPlayer.js"></script>
<style lang="stylus">
@import '../../styles/constants';

.vjs-playing.vjs-has-started .vjs-big-play-button
  display: none !important;

.vjs-has-started .vjs-big-play-button
  display: block !important;

.videoPlayer
  width: 100%;
  min-height: 300px;
  position: relative;

  .bannerContainer
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  .video-player
    height: 100%;
    position: relative;

    .video-js
      width: 100%;
      height: 100%;

    .vjs-control-bar
      display: none;

    .video-js:hover .vjs-big-play-button
      border-color: $white;
      background-color: $purple;

    .vjs-big-play-button
      position: absolute;
      left: 0;
      top: calc(50% - (45px / 2));
      right: 0;
      border-color: $purple;
      background-color: $purple;
      margin: 0 auto;

      @media (max-width: $sm)
        font-size: 2em;

      &:hover
        border-color: $white;
        background-color: $purple;

  .videoPlayerVolumeButton
    height: 47px;
    position: absolute;
    transition: background-color 0.2s;
    right: 10px;
    bottom: 10px;
    z-index: 2;
    padding: 10px 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover
      background-color: $darkpurple;
</style>
