<template>
<div class="comments-root">
  <p class="comment-content">{{ comment.content }}</p>
  <p class="comment-author">by <span class="comment-author-name">{{ comment.user.userName }}</span></p>
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
}

.comment-author {
  margin-top: 0px;
  text-align: right;
}

.comment-author-name {
  font-weight: bold;
}

</style>
