<template>
  <el-card class="box-card">
    <div slot="header" class="card-header">
      <div class="post-title-root">
        <span>{{ postTitle }}</span>
      </div>
      <div class="view-post-root">
        <view-post-button :text="text"></view-post-button>
      </div>
    </div>
    <div class="card-body">
      <div class="post-tags-root">
        
      </div>
      <div class="post-author-root">
        <span class="post-author">By: {{ postAuthor }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
  import { IntroButton } from '@/components'

  export default {
    components: {
      'view-post-button': IntroButton
    },
    data() {
      return {
        text: "View Post."
      }
    },
    props: ['postTitle', 'postAuthor', 'postTags']
  }
</script>

<style>
.box-card {
  width: 92%;
}

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
}
</style>