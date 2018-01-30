<template>
  <!-- layout -->
  <el-container>
    <!-- brews aside -->
    <el-aside width="30%" class="aside-root">
      <div class="brewery-logo-root">
        <!-- logo populated from api call -->
        <brewery-logo :breweryLogo="breweryData.logoUrl" class="brewery-logo"/>
      </div>
      <h1 class="brews-title">Brews.</h1>
      <!-- define props as brews array from api call -->
      <brews class="brews-table" :tableData="breweryData.brews"/>
      <!-- link to brewery's website from api call -->
      <a :href="`${breweryData.websiteUrl}`" target="_blank">
        <visit-website-button :text="visitUrl" class="visit-website-button"/>
      </a>
    </el-aside>
    <el-container>
      <!-- header with logo, name, button to add post -->
      <el-header class="header-root">
        <!-- components, define props for each from api -->
        <brewery-title :brewery="breweryData.name" class="brewery-title"/>
      </el-header>
      <!-- main area with posts -->
      <el-main class="main-root">
        <!-- define props, loop through all posts -->
        <div class="main-content-header">
          <h1 class="posts-title">Posts.</h1>
          <div class="add-post-root">
            <nuxt-link to="/new-post">
              <add-post-button :text="addPost" class="add-post-button"/>
            </nuxt-link>
          </div>
        </div>
        <post-display
          v-for="post in postData"
          :key="post.title"
          :tagsList="post.tags"
          :postTitle="post.title" 
          :postAuthor="post.author"/>
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
} from '@/components'

export default {
  // create custom html tags
  components: {
    'brewery-title': BreweryTitle,
    'brews': Brews,
    'post-display': PostDisplay,
    'brewery-logo': BreweryLogo,
    'add-post-button': Button,
    'visit-website-button': Button
  },
  // define post data needed
  data() {
    return {
      // init empty breweryData obj
      breweryData: {},
      addPost: "Add new post.",
      visitUrl: "Check out their website.",
      postData: [
      {
        title: "dummy title about placeholder brewery 1",
        author: "dummy author 1",
        tags: ["tag 1", "tag 2", "tag 3"]
      },
      {
        title: "dummy title about placeholder brewery 2",
        author: "dummy author 2",
        tags: ["tag 4", "tag 5", "tag 6"]
      },
      {
        title: "dummy title about placeholder brewery 3",
        author: "dummy author 3",
        tags: ["tag 7", "tag 8", "tag 9"]
      },
      {
        title: "dummy title about placeholder brewery 4",
        author: "dummy author 4",
        tags: ["tag 10", "tag 11", "tag 12"]
      }]
    }
  },
  // save city and brewery from route params
  computed: {
    city() {
      return this.$route.params.city
    },
    brewery() {
      return this.$route.params.brewery
    }
  },
  // call api with city and brewery from route params, send results to breweryData object
  async created() {
    const { data } = await axios.get(`/breweries/${this.city}/${this.brewery}`)
    this.breweryData = data
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
  height: 250px;
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
  width: 25%;
  text-align: right;
}

.posts-title {
  width: 75%;
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
  font-size: 1.2em;
  margin: 0px;
  margin-bottom: 20px;
}

.main-root {
  padding-top: 0px;
}
</style>
