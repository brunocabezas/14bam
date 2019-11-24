<template>
  <div class="footer">
    <div class="footerLeft">
      <h1 class="suscribeText">suscríbete a nuestro boletín</h1>
      <div class="suscribeInput">
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://bienaldeartesmediales.us11.list-manage.com/subscribe/post?u=21121cf28dc5ae821ecbf30c9&amp;id=4459a2b85e"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <!-- <label for="mce-EMAIL">Email Address </label> -->
                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  value
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: fixed; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_21121cf28dc5ae821ecbf30c9_4459a2b85e"
                  tabindex="-1"
                  value
                />
              </div>
              <div class="clear">
                <input
                  style="display:none;"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
      </div>
    </div>
    <div class="footerRight">
      <SocialNetworks />
      <p class="contactText">contacto@cchv.cl</p>
    </div>
  </div>
</template>

<script src="./footer.js"></script>
<style src="./footer.styl" scoped lang="styl"></style>
