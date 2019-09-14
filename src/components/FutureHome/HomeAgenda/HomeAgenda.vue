<template>
  <div class="agenda">
    <div class="agendaEvent" v-for="event in events" v-bind:key="event.key">
      <div class="agendaEventDate">
        {{event.date}} <br />
        {{event.month}}
      </div>
      <div class="agendaEventTime">{{event.time}}hrs</div>
      <div class="agendaEventTitle">{{ event.name }}</div>
    </div>
    <div class="agendaSubscribe">
      <a
        target="_blank"
        href="https://calendar.google.com/calendar/b/1?cid=Y2Nodi5jbF9jdGNlNWpxbnNucDVyazRxYWR1M2MxdXQya0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
      >
        suscribete
      </a>
    </div>
  </div>
</template>

<script src='./homeAgenda.js'></script>
