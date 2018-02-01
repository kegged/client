<template>
  <div class="comments-root">
    <p class="comment-content">{{ comment.content }}</p>
    <p class="comment-author">{{ comment.post.brewery.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["comment"]
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
  font-weight: bold;
}
</style>
