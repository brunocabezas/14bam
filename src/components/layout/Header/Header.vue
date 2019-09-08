<template>
  <div class="header">
    <div class="headerLogo">
      <router-link title="Inicio" v-if="!isOnHome" :to="urls.home">
        <img alt="Bienal Artes Mediales Logo" src="@/assets/logo.png" />
      </router-link>
      <img
        v-if="isOnHome"
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
          class="headerNavMenu"
          v-click-outside="clickOutsideMenu">
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Inicio" :to="urls.home">Inicio</router-link>
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Programas" :to="urls.programs">Programas</router-link>
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Exposiciones" :to="urls.expositions"
              >Exposiciones</router-link
            >
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Participantes" :to="urls.participants"
              >Participantes</router-link
            >
          </li>
          <!-- <li class="headerNavMenuItem">
            <a>Lugares</a>
          </li> -->
        </ul>
        <div class="headerNavContact">
          <SocialNetworks isWhite />
          <p>contacto@cchv.cl</p>
        </div>
      </nav>
      <burger-button
        v-if="!isOnHome"
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
