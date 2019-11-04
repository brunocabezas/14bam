<template>
  <ul v-if="loadingData" class="expositionInfoBar">
    <Loader size="20px" :loading="loadingData" />
  </ul>
  <ul v-else class="expositionInfoBar">
    <li class="expositionInfoBarItem">
      {{ exposition.place }}
    </li>
    <li
      v-if="exposition.startDate || exposition.endDate"
      class="expositionInfoBarItem"
    >
      {{ exposition.startDate }}
      <br />
      {{ exposition.endDate }}
    </li>
    <li v-if="exposition.hour" class="expositionInfoBarItem">
      {{ exposition.hour }}
    </li>
    <li v-if="exposition.hour2" class="expositionInfoBarItem">
      {{ exposition.hour2 }}
    </li>
    <li
      class="expositionInfoBarItem"
    >
      <div class="expositionInfoBarItem__linkWrapper">
        <div class="expositionAddress">
        {{ exposition.address }}
        </div>
        <a
          target="_blank"
          :title="exposition.web"
          class="expositionInfoBarItem__link"
          :href="exposition.web"
          >{{ exposition.webText || exposition.web }}</a
        >
      </div>
    </li>
  </ul>
</template>

<script src="./expositionInfoBar.js"></script>
<style scoped lang="stylus" src="./expositionInfoBar.styl"></style>
