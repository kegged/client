<template>
  <footer class="footer-root">
    <div class="footer-sections">
      <div class="footer-section">
        <nuxt-link class="footer-links" to="/about-us">About Us</nuxt-link>
      </div>
      <div class="footer-section">
      <h6>
        &copy; All Rights Reserved.
        <br/>
        Charles Kenney. Paul Zavattieri. Emmanuel Mosqueda R.
      </h6>
      </div>
      <div class="footer-section">
        <!-- fixme: replace these with svgs at some point -->
        <div>
          <a href="https://github.com/kegged/client" target="_blank"><img class="footer-img-1" src="../static/github.png" alt="github pic"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-root {
  background-color: #545c64;
  color: #ebb563;
}

.footer-sections {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

}

.footer-section {
  text-align: center;
  width: 100%;
}

.footer-links {
  text-decoration: none;
  color: #ebb563;
  font-weight: bold;
  font-size: 0.9em;
  line-height: 1.5em;
}

.footer-links:hover {
  text-decoration: underline;
}

.footer-img-1 {
  margin: 0px;
  max-height: 40px;
}
</style>