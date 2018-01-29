<template>
  <div class="brew-stack-root">
    <h1 class="stack-title">The Stack.</h1>
    <div class="brew-stack-image-root">
      <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
        <stack-item class="img-container" v-for="(item, i) in data" :key="i">
          <el-card :body-style="{ padding: '0px' }" class="stack-card">
            <img :src="`https://via.placeholder.com/${item.image}`">
            <div style="padding: 14px;" class="brewery-name">
              <nuxt-link to="/cities/city/brewery">
              <span>{{item.brewery}}</span>
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

export default {
  components: { Stack, StackItem },
  data() {
    return {
      data: [
        {brewery: "placeholder", image: "350x150"},
        {brewery: "placeholder", image: "300x500"},
        {brewery: "placeholder", image: "400x200"},
        {brewery: "placeholder", image: "200x200"},
        {brewery: "placeholder", image: "400x400"},
        {brewery: "placeholder", image: "300x300"},
        {brewery: "placeholder", image: "200x250"},
        {brewery: "placeholder", image: "500x500"},
        {brewery: "placeholder", image: "300x250"},
        {brewery: "placeholder", image: "400x200"},
        {brewery: "placeholder", image: "200x300"},
        {brewery: "placeholder", image: "300x300"},
        {brewery: "placeholder", image: "500x200"},
        {brewery: "placeholder", image: "250x250"},
        {brewery: "placeholder", image: "300x500"},
        {brewery: "placeholder", image: "200x200"},
        {brewery: "placeholder", image: "400x400"},
        {brewery: "placeholder", image: "200x200"},
        {brewery: "placeholder", image: "350x150"},
        {brewery: "placeholder", image: "200x250"},
        {brewery: "placeholder", image: "500x500"},
        {brewery: "placeholder", image: "300x250"},
        {brewery: "placeholder", image: "400x200"},
        {brewery: "placeholder", image: "200x300"}
      ]
    }
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
