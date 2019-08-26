<template>
  <div class="header">
    <div class="headerLogo">LOGO</div>
    <div class="headerNav">
      <nav 
        :class="{
          'headerNavOverlay': true,
          'headerNavOverlay--open' : isOpen,
          }">
        <ul class="headerNavMenu">
          <li class="headerNavMenuItem"><a href="">page1</a></li>
          <li class="headerNavMenuItem"><a href="">page2</a></li>
          <li class="headerNavMenuItem"><a href="">page3</a></li>
        </ul>
        <div class="headerNavContact">
          <div class="">round icons</div>
          <p>contacto@cchv.cl</p>
        </div>
      </nav>  
      <burger-button
        class="burgerButton"
        :active="isOpen"
        :bar-color="isOpen ? 'white' : 'black'"
        :bar-height="5"
        :bar-width="30"
        @click="toggleMenu"
        type="button" 
      />
    </div>
  </div>
</template>

<script src="./header.ts" lang="ts" ></script>
<style src="./header.styl" scoped lang="styl"></style>