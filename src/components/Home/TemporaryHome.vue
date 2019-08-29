<template>
<div class="temporaryHome">
  <div class="imgPlaceholder"></div>
</div>
</template>

<script >
import { Vue } from 'vue-property-decorator';
export default class TemporaryHome extends Vue {}
</script>

<style scoped lang="stylus">
.temporaryHome
  height 100%
  width 100%

.imgPlaceholder
  background url('../../assets/homeTemporal.jpg')
  background-repeat: no-repeat;
  background-position: center center;
  background-size: initial;
  height 100%
  
  @media (max-width: 1520px)
    background-size contain
</style>