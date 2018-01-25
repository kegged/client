<template>
  <!-- insert custom tag into template -->
  <city-buttons></city-buttons>
</template>

<script>
// import city buttons object
import { CityButtons } from '@/components'

export default {
  components: {
    // create custom city buttons tag
    'city-buttons': CityButtons
  }
}
</script>