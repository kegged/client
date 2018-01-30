<template>
  <!-- brewery logo prop -->
  <div class="brew-logo-root">
    <img :src="breweryLogo" alt="brewery logo" class="brewery-logo">
  </div>
</template>

<script>
  export default {
    props: ['breweryLogo']
  }
</script>

<style>
</style>
