<template>
  <div class="videoPlayer">
    <!-- <Loader :loading="loading"></Loader> -->
    <video-player
      ref="videoPlayer"
      :playsinline="true"
      class="video-player-box"
      :options="playerOptions"
      @ready="playerReadied"
    >
    </video-player>
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
        font-size 2em

      &:hover
        border-color: $white;
        background-color: $purple;
</style>
