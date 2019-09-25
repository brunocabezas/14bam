<template>
  <div class="agenda">
    <div class="agendaEvent" v-for="event in events" v-bind:key="event.key">
      <div class="agendaEventDate">
        <div class="agendaEventDay">{{event.date}}</div>
        <div class="agendaEventMonth">{{event.month | shortMonth }}</div>
      </div>
      <div class="agendaEventTime">{{event.time}}hrs</div>
      <div class="agendaEventTitle">{{ event.name }}</div>
    </div>
    <div class="agendaSuscribe">
      <a
        title="Ir al calendario de google"
        target="_blank"
        href="https://calendar.google.com/calendar/b/1?cid=Y2Nodi5jbF9jdGNlNWpxbnNucDVyazRxYWR1M2MxdXQya0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        suscribete
      </a>
    </div>
  </div>
</template>

<script src='./homeAgenda.js'></script>
<style lang="stylus" scoped>
@import "../../../styles/colors"

.agenda
  .agendaEvent
    border-bottom 2px solid $black
    display flex
    color $white
    align-items center
    .agendaEventTitle
    .agendaEventTime
      font-family "Roboto Mono"
    .agendaEventTitle
    .agendaEventTime
    .agendaEventDate
      padding 5px 10px
    .agendaEventDate
      font-weight bold
      text-align center
      .agendaEventDay
        font-size 18px
      .agendaEventMonth
        font-size 14px
  .agendaSuscribe
    margin-top 10px
    padding 10px 0
    text-align right
    a
      font-weight bold
      text-transform uppercase
      font-size 36px
</style>
