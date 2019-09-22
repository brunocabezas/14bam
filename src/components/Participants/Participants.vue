<template>
  <div class="participants">
    <h1 class="pageTitle">Participantes</h1>
    <ParticipantsGrid />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import ParticipantsGrid from '@/components/Participants/ParticipantsGrid/ParticipantsGrid.vue'

@Component({
  components: {
    ParticipantsGrid
  }
})
class Participants extends Vue {}
export default Participants
</script>
