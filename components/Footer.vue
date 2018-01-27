<template>
  <footer class="footer-root">
    <div class="footer-sections">
      <div class="footer-section">
        <h4>Links.</h4>
        <nuxt-link class="footer-links" to="/">Home</nuxt-link>
        <nuxt-link class="footer-links" to="/cities">Cities</nuxt-link>
        <nuxt-link class="footer-links" to="/brewstack">Breweries</nuxt-link>
        <nuxt-link class="footer-links" to="/login">Login</nuxt-link>
      </div>
      <div class="footer-section">
        <h4>Community.</h4>
        <nuxt-link class="footer-links" to="/">Feedback</nuxt-link>
        <nuxt-link class="footer-links" to="/">Meetup</nuxt-link>
        <nuxt-link class="footer-links" to="/about-us">About Us</nuxt-link>
      </div>
      <div class="footer-section">
        <h4>Social Media.</h4>
        <!-- fixme: replace these with svgs at some point -->
        <div>
          <a href="https://github.com/kegged/client" target="_blank"><img class="header-img-1" src="../static/github.png" alt="github pic"></a>
          <nuxt-link to="/"><img class="header-img-2" src="../static/twitter.png" alt="twitter pic"></nuxt-link>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <h6>
        &copy; All Rights Reserved.
        <br/>
        Charles Kenney. Paul Zavattieri. Emmanuel Mosqueda R.
      </h6>
    </div>
  </footer>
</template>


<style>
.footer-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #545c64;
  color: #ebb563;
}

.footer-sections {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-copyright {
  text-align: center;
}

.footer-links {
  text-decoration: none;
  color: #f8f8ff;
  font-size: 0.8em;
  line-height: 1.5em;
}

.footer-links:hover {
  text-decoration: underline;
}

.header-img-1 {
  margin-left: 0px;
  margin-right: 5px;
  max-height: 40px;
}

.header-img-2 {
  margin-left: 5px;
  margin-right: 0px;
  max-height: 40px;
}
</style>



