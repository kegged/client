<template>
  <el-container>
    <el-header>
      <!-- insert city header, define props -->
      <h1 class="city-title">{{ city }}</h1>
    </el-header>
    <el-container>
      <el-aside width="25%" class="city-logo-root">
        <div>
          <city-logos :cityLogo="logo" class="city-logo"/>
        </div>
      </el-aside>
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
      <el-aside width="25%" class="city-logo-root">
        <div>
          <city-logos :cityLogo="logo" class="city-logo"/>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
// import brewery buttons object
import { Button } from '@/components'
import { CityLogo } from '@/components'
import axios from '@/plugins/axios'

export default {
  components: {
    // create custom brewery buttons tag
    'brewery-buttons': Button,
    'city-logos': CityLogo
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
.brewery-buttons-root, .city-logo-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brewery-buttons {
  font-size: 2.4em;
  margin: 10px;
}

.city-title {
  width: 100%;
  color: #545c64;
  font-size: 2.4em;
  font-weight: bolder;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}

.city-logo-root {
  padding-bottom: 26px;
}

.city-logo {
  max-height: 250px;
  max-width: 90%;
  margin: 0px;
}
</style>
