<template>
  <div class="expositions page">
    <h1 class="pageTitle">Exposiciones</h1>
    <ExpositionsGrid />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import ExpositionsGrid from './ExpositionsGrid.vue'

@Component({
  components: {
    ExpositionsGrid
  }
})
class Expositions extends Vue {}
export default Expositions
</script>
<style src="./expositions.styl" scoped lang="styl"></style>
