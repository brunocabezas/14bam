<template>
<div class="home">
  <div class="imgPlaceholder"></div>
</div>
</template>

<script src="./home.js" >
import { Vue } from 'vue-property-decorator';

export default class TemporaryHome extends Vue {

}
</script>
<style scoped lang="stylus">

.home
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