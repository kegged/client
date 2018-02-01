<template>
  <div class="brew-stack-root">
    <h1 class="stack-title">The Stack.</h1>
    <div class="brew-stack-image-root">
      <!-- define stack width 300px with 15px gutters -->
      <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
        <!-- for each item in breweryData... -->
        <stack-item class="img-container" v-for="(item, i) in breweryData" :key="i">
          <!-- build a card for each stack item -->
          <el-card :body-style="{ padding: '0px' }" class="stack-card">
            <!-- image pulled from api -->
            <img :src="`${item.logoUrl}`">
            <div style="padding: 14px;" class="brewery-name">
              <!-- link to website from api -->
              <nuxt-link :to="`/cities/${item.city.slug}/${item.slug}`">
              <!-- brewery name from api -->
              <span>{{item.name}}</span>
              </nuxt-link>
            </div>
          </el-card>
        </stack-item>
      </stack>
    </div>
  </div>
</template>

<script>
// import vue stack grid from npm and axios for api calls
import { Stack, StackItem } from 'vue-stack-grid'
import axios from '@/plugins/axios'

export default {
  components: { Stack, StackItem },
  // async api call, wait for api to return /breweries
  async asyncData({ error }) {
    try {
      const { data } = await axios.get(`/breweries`)
      return { breweryData: data }
    } catch (err) {
      error({
        statusCode: 500,
        message: 'Something broke ):'
      })
    }
  },
  // stack grid col width prop
  props: ["column-min-width"]
}
</script>

<style>
/* fixme: namespace all styles */
/* flexbox containers, color, sizing styles */
.brew-stack-root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.brew-stack-image-root {
  width: 80%;
}

.stack-title {
  color: #545c64;
  font-weight: bolder;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 2.5em;
}

.stack-card {
  width: 100%;
  overflow: hidden;
}

.brewery-name, .brewery-name a {
  color: #ebb563;
  font-weight: bold;
  background-color: #545c64;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
  margin: 0;
  object-fit: fill;
}

.img-container img {
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
}
</style>
