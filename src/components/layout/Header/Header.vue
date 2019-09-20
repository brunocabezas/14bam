<template>
  <div class="header">
    <div class="headerLogo" v-if="displayElements">
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
        <ul class="headerNavMenu" v-click-outside="clickOutsideMenu">
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Inicio" :to="urls.futureHome"
              >Inicio</router-link
            >
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link title="Sobre la bienal" :to="urls.about"
              >Sobre la bienal</router-link
            >
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
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link
              title="Programa: Escuela de la intuicion"
              :to="urls.program('escuela-de-la-intuicion')"
              >Escuela de la intuicion</router-link
            >
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link
              title="Programa: Campos Magneticos"
              :to="urls.program('campos-magneticos')"
            >
              Campos Magneticos</router-link
            >
          </li>
          <li @click="toggleMenu" class="headerNavMenuItem">
            <router-link
              title="Programa: Campos Magneticos"
              :to="urls.contest"
            >
              Concurso juan downey</router-link
            >
          </li>
        </ul>
        <div class="headerNavContact">
          <SocialNetworks isWhite />
          <p>contacto@cchv.cl</p>
        </div>
      </nav>
      <burger-button
        v-if="displayElements"
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
