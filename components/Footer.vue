<template>
  <footer class="footer-root">
    <div class="footer-sections">
      <div class="footer-section">
        <h4>Links.</h4>
        <a class="footer-links" href="">Home</a>
        <a class="footer-links" href="">Cities</a>
        <a class="footer-links" href="">Breweries</a>
        <a class="footer-links" href="">Log In</a>
      </div>
      <div class="footer-section">
        <h4>Community.</h4>
        <a class="footer-links" href="">Feedback</a>
        <a class="footer-links" href="">Meet up</a>
      </div>
      <div class="footer-section">
        <h4>Social Media.</h4>
        <!-- fixme: replace these with svgs at some point -->
        <div>
          <a href=""><img class="header-img" src="../static/github.png" alt="github pic"></a>
          <a href=""><img class="header-img" src="../static/twitter.png" alt="twitter pic"></a>
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
</style>


