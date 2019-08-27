<template>
  <div class="header">
    <div class="headerLogo">
      <img 
        alt="Bienal Artes Mediales Logo"
        src="@/assets/logo.png" />
    </div>
    <div class="headerNav">
      <nav 
        :class="{
          'headerNavOverlay': true,
          'headerNavOverlay--open' : isOpen,
          }">
        <ul class="headerNavMenu">
          <li class="headerNavMenuItem"><a>Sobre la bienal</a></li>
          <li class="headerNavMenuItem"><a>Programas</a></li>
          <li class="headerNavMenuItem"><a>Lugares</a></li>
        </ul>
        <div class="headerNavContact">
          <SocialNetworks isWhite />
          <p>contacto@cchv.cl</p>
        </div>
      </nav>  
      <burger-button
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

<script src="./header.ts" lang="ts" ></script>
<style src="./header.styl" scoped lang="styl"></style>