<template>
<!-- home page -->
<!-- welcome messages -->
  <div center class="welcome-root">
    <h1 class="welcome-message">Welcome to Kegged.</h1>
    <h3 class="welcome-message">We like North Carolina beer.</h3>
    <h3 class="welcome-message">We hope you do too.</h3>
    <!-- link to explore cities -->
    <nuxt-link to="/cities">
      <el-button  
      round
      type="warning"
      class="explore-nc-button">Explore NC</el-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
/* flexbox, set up fonts/color scheme */
.welcome-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.welcome-message {
  color: #545c64;
  font-weight: bolder;
  margin-bottom: 12px;
}

.explore-nc-button {
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  margin-top: 16px;
  font-size: 2.6em;
  border: 1px solid #545c64;
}
</style>
