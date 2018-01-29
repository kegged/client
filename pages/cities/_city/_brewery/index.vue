<template>
  <!-- layout -->
  <el-container>
    <!-- header with logo, name, button to add post -->
    <el-header class="header-root">
      <!-- components, define props for each -->
      <brewery-logo :breweryLogo="breweryInfo.logo" class="brewery-logo"/>
      <brewery-title :brewery="breweryInfo.brewery" class="brewery-title"/>
      <div class="add-post-root">
        <nuxt-link to="/new-post">
          <add-post-button :text="addPost" class="add-post-button"/>
        </nuxt-link>
      </div>
    </el-header>
    <el-container>
      <!-- brews aside -->
      <el-aside width="30%" class="aside-root">
        <h1 class="brews-title">Brews.</h1>
        <!-- define props -->
        <brews :tableData="tableData"/>
      </el-aside>
      <!-- main area with posts -->
      <el-main class="main-root">
        <!-- define props, loop through all posts -->
        <h1 class="posts-title">Posts.</h1>
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
  // import all components
  import { BreweryTitle } from '@/components'
  import { Brews } from '@/components'
  import { PostDisplay } from '@/components'
  import { BreweryLogo } from '@/components'
  import { Button } from '@/components'

  export default {
    // create custom html tags
    components: {
      'brewery-title': BreweryTitle,
      'brews': Brews,
      'post-display': PostDisplay,
      'brewery-logo': BreweryLogo,
      'add-post-button': Button
    },
    // define data needed
    data() {
      return {
        tableData: [{
          brew: 'placeholder',
          style: 'ipa'
        }, {
          brew: 'placeholder',
          style: 'porter'
        }, {
          brew: 'placeholder',
          style: 'stout'
        }, {
          brew: 'placeholder',
          style: 'pale ale'
        }, {
          brew: 'placeholder',
          style: 'wheat'
        }],
        breweryInfo: {
          brewery: "Placeholder Brewery.",
          logo: "http://via.placeholder.com/300?text=Placeholder.com+rocks!"
        },
        addPost: "Add new post.",
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
    }
  }
</script>

<style>
.aside-root, .main-root {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.brewery-title, .brews-title, .posts-title {
  color: #545c64;
  font-weight: bolder;
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
}

.brews-title, .posts-title {
  font-size: 2em;
}

.brewery-title {
  font-size: 2.5em;
}

.header-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
}

.brewery-title {
  width: 50%;
}

.brewery-logo, .add-post-root {
  width: 25%;
}

.add-post-root {
  text-align: right;
}

.add-post-button {
  font-size: 1.5em;
  margin: 0px;
}

.main-root {
  padding-top: 0px;
}
</style>
