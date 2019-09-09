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
<style src="./programs.styl" scoped lang="styl"></style>
