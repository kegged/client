<template>
  <!-- each post is in a card -->
  <el-card class="box-card">
    <!-- card header -->
    <div slot="header" class="post-card-header">
      <!-- title is post's title - need prop -->
      <div class="post-title-root">
        <span>{{ data.title }}</span>
      </div>
      <!-- button to view post -->
      <div class="view-post-root">
        <nuxt-link :to="postLink">
          <x-button text="view post"/>
        </nuxt-link>
      </div>
    </div>
    <!-- card body -->
    <div class="post-card-body">
      <!-- display all the tags. need a prop for tagsList to loop through tags array -->
      <div class="post-tags-root">
        <el-tag
          v-for="tag in data.tags"
          :key="tag.id"
          color="#ebb563"
          :disable-transitions="false">{{ tag.tag.name }}
        </el-tag>
      </div>
      <!-- author - need prop-->
      <div class="post-author-root">
        <span class="post-author">by
          <x-link :to="data.user.userName | linkToProfile">
            {{ data.user.userName }}
          </x-link>
        </span>
        <timeago
          class="brewery-post-time"
          :auto-update="5"
          :since="Date.parse(data.updatedAt)" />
      </div>
    </div>
  </el-card>
</template>

<script>
// import button 
import Link from '@/components/Link'
import Button from '@/components/Button'

// export the intro button component with View Post text and export necessary props
export default {
  components: {
    'x-button': Button,
    'x-link': Link,
  },
  data() {
    return {
    }
  },
  props: ['data'],
  computed: {
    postLink() { return `/posts/${this.data.slug}` }
  },
  filters: {
    linkToProfile: userName => `/users/${userName}`
  }
}
</script>

<style>
.post-author {
  font-size: .9em;
  display: block;
}

.post-author a {
  font-size: 1em;
}

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

.box-card .el-card__header {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ebb563;
  font-weight: bolder;
  background-color: #545c64;
  font-size: 1em;
}

.box-card .el-card__body {
  background-color: #DCDCDC;
  padding: 10px;
}

.post-title-root, .post-tags-root {
  width: 70%;
}

.view-post-root, .post-author-root {
  width: 30%;
  text-align: right;
}

.brewery-post-time {
  font-size: 0.8em;
}
</style>