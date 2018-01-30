<template>
  <!-- main app template. header, main populated based on nuxt route, footer -->
  <div id="app">
    <x-header id="header"/>
    <nuxt id="main"/>
    <x-footer id="footer"/>
  </div>
</template>

<script>
// import header/footer
import { Header, Footer } from '@/components'

export default {
  // create custom html tags from import
  components: {
    'x-header': Header,
    'x-footer': Footer
  }
}
</script>

<style>
/* set up overarching flex, color, sizing, margins, padding */
html {
  font-family: 'Courier', sans-serif;
  background-color: #545c64;
}

html, body, #header, #main, #footer {
  margin: 0;
  padding: 0;
  background-color: #545c64;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex-grow: 1;
  background-color: #f8f8ff;
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>
