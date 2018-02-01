<template>
  <div class="prof-post-root">
    <p class="prof-post-title">{{ post.title }}</p>
    <p class="prof-post-brewery">{{ post.brewery.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"]
}
</script>

<style>
.prof-post-root {
  display: flex;
  flex-direction: column;
  color: #545c64;
}

.prof-post-title {
  max-width: 80%;
  margin: 8px 0px 0px 0px;
}

.prof-post-brewery {
  margin: 0px 0px 5px 0px;
  text-align: right;
  font-weight: bold;
}
</style>
