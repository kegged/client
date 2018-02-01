<template>
  <div class="comments-root">
    <p class="comment-content">{{ comment.content }}</p>
    <p class="comment-author">by
      <x-link :to="comment.user.userName | linkToProfile">
        <span class="comment-author-name">{{ comment.user.userName }}</span>
      </x-link>
    </p>
    <timeago
      class="viewcomment-post-time"
      :since="Date.parse(comment.updatedAt)"
      :auto-update="5"/>
  </div>
</template>

<script>
import Link from './Link'

export default {
  components: { 'x-link': Link },
  props: ["comment"],
  filters: {
    linkToProfile: userName => `/users/${userName}`
  }
}
</script>

<style>
.comments-root {
  display: flex;
  flex-direction: column;
  color: #545c64;
}

.comment-content {
  max-width: 80%;
  margin: 8px 0px 0px 0px;
}

.comment-author {
  margin: 0px 0px 5px 0px;
  text-align: right;
}

.comment-author-name {
  font-weight: bold !important;
  font-size: 1.1em;
}

.viewcomment-post-time {
  font-size: 0.8em;
  text-align: right;
  margin-bottom: 5px;
}
</style>
