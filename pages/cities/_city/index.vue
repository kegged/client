<template>
  <el-container>
    <el-header>
      <!-- insert city header, define props -->
      <city-header :city="city" :cityLogo="logo"/>
    </el-header>
    <el-main>
      <!-- insert custom tag into template -->
      <div class="brewery-buttons-root">
        <!-- loop through all breweries, create brewery button and link for each -->
        <!-- key and prop are breweries -->
        <div v-for="brewery in breweries" :key="brewery.id">
          <nuxt-link :to="`/cities/${city}/${brewery.slug}`">
            <brewery-buttons :text="brewery.name" class="brewery-buttons"/>
          </nuxt-link>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// import brewery buttons object
import { CityHeader } from '@/components'
import { Button } from '@/components'
import axios from '@/plugins/axios'

export default {
  components: {
    // create custom brewery buttons tag
    'brewery-buttons': Button,
    'city-header': CityHeader
  },
  data() {
    return {
      breweries: [],
    }
  },
  computed: {
    city() {
      return this.$route.params.city
    },
    logo() {
      return `/cities/${this.city}.png`
    }
  },
  async created() {
    const { data } = await axios.get(`/cities/${this.city}`)
    this.breweries = data.breweries
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
