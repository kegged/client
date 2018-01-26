<template>
  <el-container>
    <el-header class="header-root">
      <brewery-logo :breweryLogo="breweryInfo.logo" class="brewery-logo"/>
      <brewery-title :brewery="breweryInfo.brewery" class="brewery-title"/>
      <div class="add-post-root">
        <add-post-button :text="addPost" class="add-post-button"/>
      </div>
    </el-header>
    <el-container>
      <el-aside width="30%" class="aside-root">
        <h1 class="brews-title">Brews.</h1>
        <brews :tableData="tableData"/>
      </el-aside>
      <el-main class="main-root">
        <h1 class="posts-title">Posts.</h1>
        <post-display :postTitle="postData.title" :postAuthor="postData.author"/>
      </el-main>
    </el-container>
  </el-container>  
</template>

<script>
  import { AddPost } from '@/components'
  import { BreweryTitle } from '@/components'
  import { Brews } from '@/components'
  import { PostDisplay } from '@/components'
  import { BreweryLogo } from '@/components'
  import { IntroButton } from '@/components'

  export default {
    components: {
      'add-post': AddPost,
      'brewery-title': BreweryTitle,
      'brews': Brews,
      'post-display': PostDisplay,
      'brewery-logo': BreweryLogo,
      'add-post-button': IntroButton
    },
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
        postData: {
          title: "dummy title about placeholder brewery",
          author: "dummy author",
          tags: ["tag 1", "tag 2", "tag 3"]
        }
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
