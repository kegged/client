<template>
  <el-container>
    <el-header>
      <!-- insert city header, define props -->
      <city-header :city="city" :cityLogo="cityPic"/>
    </el-header>
    <el-main>
      <!-- insert custom tag into template -->
      <div class="brewery-buttons-root">
        <!-- loop through all breweries, create brewery button and link for each -->
        <!-- key and prop are breweries -->
        <div v-for="brewery in breweries" :key="brewery">
          <nuxt-link to="/cities/city/brewery">
            <brewery-buttons :text="brewery" class="brewery-buttons"/>
          </nuxt-link>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// import brewery buttons object
import { CityHeader } from '@/components'
import { IntroButton } from '@/components'

export default {
  components: {
    // create custom brewery buttons tag
    'brewery-buttons': IntroButton,
    'city-header': CityHeader
  },
  data() {
    return {
      breweries: ["brewery 1", "brewery 2", "brewery 3", "brewery 4", "brewery 5" ],
      city: "Placeholder City",
      cityPic: "http://via.placeholder.com/300?text=Placeholder.com+rocks!"
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

.brewery-buttons {
  font-size: 2.4em;
  margin: 10px;
}
</style>
