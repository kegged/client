<template>
  <div class="city-header-root">
    <div class="city-logo-root">
      <img :src="cityLogo" alt="city logo" class="city-logo">
    </div>
    <h1 class="city-title">{{ city }}</h1>
    <div class="city-logo-root">
      <img :src="cityLogo" alt="city logo" class="city-logo">
    </div>  
  </div>
</template>

<script>
export default {
  props: ['city', 'cityLogo']
}
</script>

<style>
.city-header-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 2em;
  max-height: 60px;
  text-align: center;
}

.city-logo-root {
  max-height: 60px;
  width: 10%;
}

.city-title {
  width: 80%;
  color: #545c64;
  font-weight: bolder;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}

.city-logo {
  max-height: 60px;
}
</style>
