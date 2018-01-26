<template>
  <!-- insert custom tag into template -->
  <div class="brewery-buttons-root">
    <!-- loop through all breweries, create brewery button for each -->
    <!-- key and prop are breweries -->
    <brewery-buttons v-for="brewery in breweries" :key="brewery" :text="brewery" class="brewery-buttons"/>
  </div>
</template>

<script>
// import brewery buttons object
import { IntroButton } from '@/components'

export default {
  components: {
    // create custom brewery buttons tag
    'brewery-buttons': IntroButton
  },
  data() {
    return {
      breweries: ["placeholder 1", "placeholder 2", "placeholder 3", "placeholder 4", "placeholder 5" ]
    }
  }
}
</script>

<style>
/* flex box for root */
.brewery-buttons-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>