<template>
  <!-- layout -->
  <el-container>
    <!-- brews aside -->
    <el-aside width="30%" class="aside-root">
      <div class="brewery-logo-root">
        <!-- logo populated from api call -->
        <brewery-logo :breweryLogo="brewery.logoUrl" class="brewery-logo"/>
      </div>
      <h1 class="brews-title">Brews.</h1>
      <!-- define props as brews array from api call -->
      <brews class="brews-table" :tableData="brewery.brews"/>
      <!-- link to brewery's website from api call -->
      <a :href="`${brewery.websiteUrl}`" target="_blank">
        <x-button
          text="Check out their website."
          class="visit-website-button"
        />
      </a>
    </el-aside>
    <el-container>
      <!-- header with logo, name, button to add post -->
      <el-header class="header-root">
        <!-- components, define props for each from api -->
        <brewery-title :brewery="brewery.name" class="brewery-title"/>
      </el-header>
      <!-- main area with posts -->
      <el-main class="main-root">
        <!-- define props, loop through all posts -->
        <div class="main-content-header">
          <h1 class="posts-title">Posts.</h1>
          <div class="add-post-root">
            <nuxt-link :to="newPostPath">
              <x-button
                text="Add new post."
                class="add-post-button"
              />
            </nuxt-link>
          </div>
        </div>
        <List
          :emptyMessage="`Nobody has posted about ${brewery.name} yet. Be the first!`"
          :dataSource="brewery.posts"
          class="brewery-page-list">
          <post-display
            v-for="post in brewery.posts"
            :data="post"
            :key="post.id"
          />
        </List>
      </el-main>
    </el-container>
  </el-container>  
</template>

<script>
// import all components and axios for api calling
import axios from '@/plugins/axios'
import {
  BreweryTitle,
  PostDisplay,
  BreweryLogo,
  Button,
  Brews,
  List
} from '@/components'

export default {
  // create custom html tags
  components: {
    'brewery-title': BreweryTitle,
    'brews': Brews,
    'post-display': PostDisplay,
    'brewery-logo': BreweryLogo,
    'x-button': Button,
    List
  },
  // save city and brewery from route params
  computed: {
    citySlug() {
      return this.$route.params.city
    },
    brewerySlug() {
      return this.$route.params.brewery
    },
    newPostPath() {
      const { id, name } = this.brewery
      return `/posts/new?breweryId=${id}&breweryName=${name}`
    }
  },
  // get data asynchronously before component is mounted
  // and inject it into the component instance via return
  async asyncData({ params }) {
    const { city, brewery } = params
    const { data } = await axios.get(`/breweries/${city}/${brewery}`)
    return { brewery: data }
  }
}
</script>

<style>
/* flexbox, color/sizing */
.aside-root, .main-root {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.brewery-title, .brews-title, .posts-title {
  color: #545c64;
  font-weight: bolder;
  text-align: center;
}

.brewery-logo-root {
  text-align: center;
  width: 80%;
}

.brewery-logo {
  object-position: center;
  object-fit: contain;
  background: transparent;
  max-height: 250px;
  width: 100%;
  margin: 0px;
}

.brews-title, .posts-title {
  font-size: 2em;
  margin-bottom: 5px;
}

.brewery-title {
  font-size: 2.5em;
  margin: 24px 0px;
}

.header-root, .main-content-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
}

.main-content-header {
  width: 92%;
  margin: 0px;
}
.add-post-root {
  width: 40%;
  text-align: right;
}

.posts-title {
  width: 60%;
  text-align: left;
}

.add-post-button {
  font-size: 1em;
  margin: 0px;
}

.brews-table {
  margin-bottom: 30px;
}

.visit-website-button {
  font-size: 0.8em;
  margin: 0px;
  margin-bottom: 20px;
}

.main-root {
  padding-top: 0px;
}

.el-tag {
  font-family: 'Courier', sans-serif;
  border: 1px solid #545c64;
  margin-right: 5px;
}

span.el-tag, i.el-tag__close.el-icon-close {
  color: #f8f8ff;
  font-weight: bold;
}

.brewery-page-list {
  width: 92%;
  padding: 0px;
  margin-top: 20px;
}

.brewery-page-list .el-card {
  width: 100%;
}
</style>

