<template>
  <div class="page programs">
    <h1 class="programsTitle">Programas</h1>

    <div class="programsContainer">
      <div v-bind:key="program.id" v-for="program in programs" class="program">
        <h1 class="programTitle">
          <router-link :to="urls.program(program.slug)">{{ program.name }}</router-link></h1>
        <ul class="programEventList">
          <li
            class="programEvent"
            v-bind:key="program.id"
            v-for="program in program.events"
          >
            <router-link 
              class="programEventLink"
              :title="program.post_title"
              :to="urls.event(program.post_name)"
            >
              {{ program.post_title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script src="./programs.js" ></script>
<style src="./programs.styl" scoped lang="styl"></style>
