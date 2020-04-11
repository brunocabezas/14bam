<template>
  <div class="keyword">
    <h1>
      Palabra clave: <i>{{ keyword.name }}</i>
    </h1>
    <Loader :loading="isLoading">
      <h3 v-if="keyword.participants.length > 0">
        {{ keyword.participants.length }} participante(s) relacionado(s)
      </h3>
      <ParticipantsGrid :participantsProps="keyword.participants" />
    </Loader>
  </div>
</template>

<script src='./keyword.ts'></script>
