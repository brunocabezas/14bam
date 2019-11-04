<template>
  <Loader :loading="isLoading">
    <div class="agendaEvents">
      <router-link
        :to="urls.event(event.slug)"
        class="agendaEvent"
        v-for="event in events"
        v-bind:key="event.id"
      >
        <div class="agendaEventDate">
          <div class="agendaEventDay">{{ event.date.day }}</div>
          <div class="agendaEventMonth">{{ event.date.month | shortMonth }}</div>
        </div>
        <div class="agendaEventTime">{{ event.date.time }}</div>
        <div class="agendaEventTitle">{{ event.name }}</div>
      </router-link>
    </div>
    <div class="agendaSuscribe">
      <a
        title="Ir al calendario de google"
        target="_blank"
        href="https://calendar.google.com/calendar/b/1?cid=Y2Nodi5jbF9jdGNlNWpxbnNucDVyazRxYWR1M2MxdXQya0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        suscríbete
      </a>
    </div>
  </Loader>
</template>

<script src='./agenda.js'></script>
<style lang="stylus" scoped>
@import '../../../styles/colors';

.agenda
  .agendaEvents
    border-top: 2px solid $black;
    max-height: calc(100vh - 62px - 90px - 28px);
    overflow-y: scroll;

  .agendaEvent
    border-bottom: 2px solid $black;
    display: flex;
    color: $white;
    transition: background-color 0.2s;
    align-items: center;
    text-decoration none

    &:hover
      cursor: pointer;
      background-color: darken($purple, 10);

    .agendaEventTitle, .agendaEventTime
      font-family: 'Roboto Mono', monospace;
      text-decoration none

    .agendaEventTitle, .agendaEventTime, .agendaEventDate
      padding: 5px 10px;

    .agendaEventDate
      font-weight: bold;
      text-align: center;

      .agendaEventDay
        font-size: 18px;

      .agendaEventMonth
        font-size: 14px;

  .agendaSuscribe
    margin-top: 15px;
    padding: 10px 0;
    text-align: left;

    a
      font-weight: bold;
      text-transform: uppercase;
      font-size: 36px;
</style>
