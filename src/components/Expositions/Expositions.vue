<template>
  <div class="expositions">
    <h1 class="pageTitle">Exposiciones</h1>
    <ExpositionsGrid />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ExpositionsGrid from './ExpositionsGrid/ExpositionsGrid.vue'

@Component({
  components: {
    ExpositionsGrid
  }
})
class Expositions extends Vue {}
export default Expositions
</script>
<style src="./expositions.styl" scoped lang="styl"></style>
