<template>
    <div class="keyword">
        <h1>{{keyword.name}}</h1>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
// import { loadKeyword } from '../../../api/client'
import store from '@/config/store'

@Component({
  store
})
class Keyword extends Vue {
  get keyword () {
    // const noKeyword
    // if (this.$store.)
    return { name: 'Keyword name' }
  }

  mounted () {
    // loadTaxonomy('chano')
    // if (this.$route.params.slug) {
    //   const doRequest = this.$route.params.slug
    //   if (doRequest) {
    //     this.loadingData = true
    //     loadKeyword(this.$route.params.slug).then(res => {
    //       this.$store.commit('loadKeyword', getParticipantFromApi(res.data))
    //       this.loadingData = false
    //     })
    //   }
    // }
  }
// }
}
export default Keyword
</script>
