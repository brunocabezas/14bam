<template>
  <div class="header">
    <div class="headerLogo">
      <router-link title="Inicio" v-if="!isOnFutureHome" :to="urls.home">
        <img alt="Bienal Artes Mediales Logo" src="@/assets/logo.png" />
      </router-link>
      <img
        v-if="isOnFutureHome"
        alt="Bienal Artes Mediales Logo"
        src="@/assets/logo.png"
      />
    </div>
    <div class="headerNav">
      <nav
        :class="{
          headerNavOverlay: true,
          'headerNavOverlay--open': isOpen
        }"
      >
        <ul
          @click="toggleMenu"
          class="headerNavMenu"
          v-click-outside="clickOutsideMenu"
        >
          <li class="headerNavMenuItem">
            <router-link title="Inicio" :to="urls.futureHome"
              >Inicio</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link title="Sobre la bienal" :to="urls.about"
              >Sobre la bienal</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link title="Sobre la bienal" :to="urls.abstract"
              >El cuarto mundo</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link title="Exposiciones" :to="urls.expositions"
              >Exposiciones</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link title="Participantes" :to="urls.participants"
              >Participantes</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link
              title="Programa: Escuela de la intuicion"
              :to="urls.mainProgram('escuela-de-la-intuicion')"
              >Escuela de la intuicion</router-link
            >
          </li>
          <li class="headerNavMenuItem">
            <router-link
              title="Programa: Campos Magnéticos"
              :to="urls.mainProgram('campos-magneticos')"
            >
              Campos Magnéticos</router-link
            >
          </li>
          <!-- TODO Add exposition when available -->
          <!-- <li class="headerNavMenuItem"> -->
            <!-- <router-link title="Concurso Juan Downey" :to="urls.contest">
              Concurso Juan Downey</router-link
            > -->
          <!-- </li> -->

          <li class="headerNavMenuItem">
            <a
              target="_blank"
              href="http://www.bienaldeartesmediales.cl/14/wp-content/uploads/2019/10/programa14bienal.pdf"
              title="Descargar programa en PDF"
              :to="urls.about"
              >Descargar Programa</a
            >
          </li>
        </ul>
        <div class="headerNavContact">
          <SocialNetworks isWhite />
          <p>contacto@cchv.cl</p>
        </div>
      </nav>
      <burger-button
        v-if="displayElements && !isOnHome"
        class="burgerButton"
        :active="isOpen"
        :bar-color="isOpen ? 'white' : 'black'"
        :bar-height="4"
        :bar-width="30"
        @click="toggleMenu"
        type="button"
      />
    </div>
  </div>
</template>

<script src="./header.js"></script>
<style src="./header.styl" scoped lang="styl"></style>
