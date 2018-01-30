<template>
  <div class="brew-stack-root">
    <h1 class="stack-title">The Stack.</h1>
    <div class="brew-stack-image-root">
      <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
        <stack-item class="img-container" v-for="(item, i) in breweryData" :key="i">
          <el-card :body-style="{ padding: '0px' }" class="stack-card">
            <img :src="`${item.logoUrl}`">
            <div style="padding: 14px;" class="brewery-name">
              <nuxt-link :to="`/cities/${item.city.slug}/${item.slug}`">
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
import { Stack, StackItem } from 'vue-stack-grid'
import axios from '@/plugins/axios'

export default {
  components: { Stack, StackItem },
  data() {
    return {
      breweryData: {
      }
    }
  },
  computed: {
      city() {
        return this.$route.params.city
      },
      brewery() {
        return this.$route.params.brewery
      }
  },
  async created() {
    const { data } = await axios.get(`/breweries`)
    this.breweryData = data
  },
  props: ["column-min-width"]
}
</script>

<style>
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
