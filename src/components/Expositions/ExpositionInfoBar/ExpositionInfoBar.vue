<template>
  <ul v-if="loadingData" class="expositionInfoBar">
    <Loader size="20px" :loading="loadingData" />
  </ul>
  <ul v-else class="expositionInfoBar">
    <li class="expositionInfoBarItem expositionPlace">
      {{ exposition.place }}
    </li>
    <li
      v-if="exposition.startDate || exposition.endDate"
      class="expositionInfoBarItem expositionDates"
    >
      {{ exposition.startDate }}
      <br />
      {{ exposition.endDate }}
    </li>
    <li
      v-if="$mq !== 'lg'"
      class="expositionInfoBarItem expositionPracticalInfo"
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
    <li v-if="$mq !== 'lg'" class="expositionInfoBarItem expositionTimes">
      <div v-if="exposition.hour">{{ exposition.hour }}</div>
      <div v-if="exposition.hour2">{{ exposition.hour2 }}</div>
    </li>
    <li v-if="$mq === 'lg' && exposition.hour" class="expositionInfoBarItem expositionTime">
      {{ exposition.hour }}
    </li>
    <li
      mq="lg"
      v-if="$mq === 'lg' && exposition.hour2"
      class="expositionInfoBarItem expositionTime2"
    >
      {{ exposition.hour2 }}
    </li>
    <li
      v-if="$mq === 'lg'"
      class="expositionInfoBarItem expositionPracticalInfo"
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
