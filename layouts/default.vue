<template>
  <div id="app">
    <x-header id="header"/>
    <nuxt id="main"/>
    <x-footer id="footer"/>
  </div>
</template>

<script>
import { Header } from '@/components'
import { Footer } from '@/components'

export default {
  components: {
    'x-header': Header,
    'x-footer': Footer
  }
}
</script>

<style>
html {
  font-family: 'Courier', sans-serif;
}

html, body, #header, #main, #footer {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex-grow: 1;
  background-color: #E8E8E8;
}
</style>
