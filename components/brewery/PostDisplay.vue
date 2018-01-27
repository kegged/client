<template>
  <!-- each post is in a card -->
  <el-card class="box-card">
    <!-- card header -->
    <div slot="header" class="card-header">
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
    <div class="card-body">
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
  import { IntroButton } from '@/components'

  // export the intro button component with View Post text and export necessary props
  export default {
    components: {
      'view-post-button': IntroButton
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
.card-header, .card-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.post-title-root, .post-tags-root {
  width: 75%;
}

.view-post-root, .post-author-root {
  width: 25%;
  text-align: right;
}

.el-card__header {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ebb563;
  font-weight: bolder;
  background-color: #545c64;
  font-size: 1.1em;
}

.el-card__body {
  background-color: #DCDCDC;
  padding: 10px;
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
</style>