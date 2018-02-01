<template>
  <div class="prof-post-root">
    <p class="prof-post-header">
      <x-link
        class="prof-post-inline"
        :to="postLink">
        {{ post.title }}
      </x-link>
      <span class="prof-post-inline prof-post-in">in</span>
      <x-link
        class="prof-post-inline"
        :to="breweryLink">
        {{ post.brewery.name }}
      </x-link>
    </p>
    <div class="prof-post-footer">
      <el-tag
        class="prof-post-tag"
        color="#ebb563"
        v-for="tag in post.tags"
        :key="tag.id"
        :disable-transitions="false"
      >
        {{tag.tag.name}}
      </el-tag>
      <timeago
        class="prof-post-time"
        :since="Date.parse(post.updatedAt)"
        :auto-update="5"/>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link'

export default {
  components: { 'x-link': Link },
  props: ["post"],
  computed: {
    postLink() { return `/posts/${this.post.slug}` },
    breweryLink() {
      const { brewery } = this.post
      return `/cities/${brewery.city.slug}/${brewery.slug}`
    }
  }
}
</script>

<style>
.prof-post-root {
  display: flex;
  flex-direction: column;
  color: #545c64;
  padding: 5px 0;
}

.prof-post-header {
  margin: 1px 0;
  font-size: 1.2em;
}

.prof-post-in {
  font-weight: 300;
  font-size: 0.8em;
}

.prof-post-footer {
  display: flex;
  width: 100%;
  align-items: center;
}

.prof-post-time {
  margin-left: auto;
  font-size: 0.8em;
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 0.8em;
}

.prof-post-footer .el-tag {
  margin: 7.5px 0;
  color: #fff !important;
  cursor: pointer;
}

.prof-post-tag + .prof-post-tag {
  margin-left: 5px;
}
</style>
