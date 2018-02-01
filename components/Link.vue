<template>
  <a v-if="external" target="_blank" class="x-link" :href="to">
    <slot/>
  </a>
  <nuxt-link v-else class="x-link" :to="to">
    <slot/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    // is it a link to another site?
    external: { type: Boolean, default: false },
    // route
    to: { type: String, default: '/' }
  }
}
</script>

<style>
.x-link {
  text-decoration: none;
  color: #ebb563;
  font-weight: bold;
  font-size: 0.85em;
  line-height: 1.2em;
}

.x-link:hover {
  text-decoration: underline;
}
</style>
