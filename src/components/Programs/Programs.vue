<template>
  <div class="programs">
    <h1 class="programsTitle">Programas</h1>
    <TwoPrograms />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import TwoPrograms from './TwoPrograms'

@Component({
  components: {
    TwoPrograms
  }
})
class Programs extends Vue {}
export default Programs
</script>
<style scoped lang="stylus">
@import "../../styles/colors";

.programs
  .programsTitle a
    color $black
    text-decoration underline

  .programsContainer
    display flex
    padding 15px
</style>
