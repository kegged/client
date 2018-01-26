<template>
  <!-- intro button component with props -->
  <el-button  
    round
    type="warning"
    class="intro-button">{{ text }}
  </el-button>
</template>

<script>
export default {
  // define props, text, expect a string
  props: { text: String }
}
</script>

<style>
/* button style */
.intro-button {
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  font-size: 2.4em;
  margin: 10px;
  border: 1px solid #545c64;
}
</style>
