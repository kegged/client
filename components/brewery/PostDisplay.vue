<template>
  <!-- each post is in a card -->
  <el-card class="box-card">
    <!-- card header -->
    <div slot="header" class="post-card-header">
      <!-- title is post's title - need prop -->
      <div class="post-title-root">
        <span>{{ postTitle }}</span>
      </div>
      <!-- button to view post -->
      <div class="view-post-root">
        <view-post-button :text="text"></view-post-button>
      </div>
    </div>
    <!-- card body -->
    <div class="post-card-body">
      <!-- display all the tags. need a prop for tagsList to loop through tags array -->
      <div class="post-tags-root">
        <el-tag
          v-for="postTag in tagsList"
          :key="postTag"
          color="#ebb563"
          :disable-transitions="false">{{ postTag }}
        </el-tag>
      </div>
      <!-- author - need prop-->
      <div class="post-author-root">
        <span class="post-author">By: {{ postAuthor }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
  // import button 
  import { Button } from '@/components'

  // export the intro button component with View Post text and export necessary props
  export default {
    components: {
      'view-post-button': Button
    },
    data() {
      return {
        text: "View Post."
      }
    },
    props: ['postTitle', 'postAuthor', 'tagsList']
  }
</script>

<style>
.box-card {
  width: 92%;
  margin-bottom: 10px;
}

/* flex card for horizontal layout */
.post-card-header, .post-card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.post-title-root, .post-tags-root {
  width: 70%;
}

.view-post-root, .post-author-root {
  width: 30%;
  text-align: right;
}
</style>