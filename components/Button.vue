<template>
  <!-- button component with props -->
  <el-button  
    round
    type="warning"
    class="intro-button"
    @click="emitClick"
    :disabled="disabled"
  >
    {{ text }}
  </el-button>
</template>

<script>
export default {
  // define props, text, expect a string
  props: {
    text: String,
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    emitClick() { this.$emit('click') }
  }
}
</script>

<style>
/* button style */
.intro-button {
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  border: 1px solid #545c64;
}
</style>
