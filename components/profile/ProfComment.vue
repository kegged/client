<template>
  <div class="prof-comment-root">
    <p class="prof-comment-header">
      <x-link
        class="prof-comment-inline"
        :to="postLink">
        {{ comment.post.title }}
      </x-link>
      <span class="prof-comment-inline prof-comment-in">in</span>
      <x-link
        class="prof-comment-inline"
        :to="breweryLink">
        {{ comment.post.brewery.name }}
      </x-link>
    </p>
    <p class="prof-comment-content">{{ comment.content }}</p>
    <p class="prof-comment-time">
      <timeago
        :since="Date.parse(comment.updatedAt)"
        :auto-update="5"/>
    </p>
  </div>
</template>

<script>
import XLink from '@/components/Link'

export default {
  components: { 'x-link': XLink },
  props: ["comment"],
  computed: {
    postLink() { return `/posts/${this.comment.post.slug}` },
    breweryLink() {
      const { brewery } = this.comment.post
      return `/cities/${brewery.city.slug}/${brewery.slug}`
    }
  }
}
</script>

<style>
.prof-comment-root {
  display: flex;
  flex-direction: column;
  color: #545c64;
  padding: 5px 0;
}

.prof-comment-content {
  max-width: 80%;
  margin: 8px 0px 0px 0px;
}

.prof-comment-header {
  margin: 1px 0;
}

.prof-comment-in {
  font-weight: 300;
  font-size: 0.8em;
}

.prof-comment-inline {
  display: inline;
}

.prof-comment-inline + .prof-comment-inline::before {
  content: " "
}

.prof-comment-time {
  width: calc(100% - 5);
  margin: 0px 0px 5px 0px;
  text-align: right;
  font-weight: 300;
  font-size: 0.8em;
}
</style>
