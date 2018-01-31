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
            <!-- link to next page built from current city param + brewery.slug from our api -->
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
// import button and city logo
// import axios for api calls
import { Button, CityLogo } from '@/components'
import axios from '@/plugins/axios'

export default {
  components: {
    // create custom brewery buttons and city logos tags
    'brewery-buttons': Button,
    'city-logos': CityLogo
  },
  data() {
    // init empty breweries array
    return {
      breweries: [],
    }
  },
  computed: {
    // save city based on url params
    city() {
      return this.$route.params.city
    },
    // save logo based route params for each respective png
    logo() {
      return `/cities/${this.city}.png`
    }
  },
  async asyncData({ params, error }) {
    const { city } = params
    try {
      const { data } = await axios.get(`/cities/${city}`)
      return { breweries: data.breweries }
    } catch (err) {
      error({ statusCode: 404, message: 'City not found' })
    }
  }
}
</script>

<style>
/* flex box, positioning, color scheme */
.brewery-buttons-root, .city-logo-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brewery-buttons {
  font-size: 1.7em;
  margin: 10px;
}

.city-title {
  text-transform: capitalize;
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
  object-position: center;
  object-fit: contain;
  background: transparent;
  height: 250px;
  width: 90%;
  margin: 0px;
}
</style>
