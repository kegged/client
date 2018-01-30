<template>
  <!-- city logo prop -->
  <div class="city-logo-root">
    <img :src="cityLogo" alt="city logo" class="city-logo">
  </div>
</template>

<script>
  export default {
    props: ['cityLogo']
  }
</script>

