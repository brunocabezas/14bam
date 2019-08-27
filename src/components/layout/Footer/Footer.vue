<template>
  <div class="footer">
    <div class="footerLeft">
      <h1 class="susbscribeText">
        suscribete a nuestro boletin
      </h1>
      <div class="susbscribeInput">
        <input type="text" @value="mailInput">
      </div>
    </div>
    <div class="footerRight">
      <SocialNetworks />  
      <p class="contactText">contact@cchv.cl</p>
    </div>
  </div>
</template>

<script src="./footer.ts" lang="ts" ></script>
<style src="./footer.styl" scoped lang="styl"></style>