<template>
  <!-- insert custom tag into template -->
  <div class="city-buttons-root">
    <!-- loop through all cities, create city button with link for each -->
    <!-- key and prop are cities -->
    <nuxt-link v-for="city in cities" :key="city" to="/breweries/city">
      <city-buttons :text="city" class="city-buttons"/>
    </nuxt-link>
  </div>
</template>

<script>
// import city buttons object
import { IntroButton } from '@/components'

export default {
  components: {
    // create custom city buttons tag
    'city-buttons': IntroButton
  },
  // define data
  data() {
    return {
      cities: ["Asheville", "Charlotte", "Durham", "Raleigh", "Wilmington" ]
    }
  }
}
</script>

<style>
/* flex box for root */
.city-buttons-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.city-buttons {
  font-size: 2.4em;
  margin: 10px;
}
</style>