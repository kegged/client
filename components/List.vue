<template>
  <div class="list-empty-root" v-if="isEmpty">
    <strong>{{ emptyMessage }}</strong>
  </div>
  <ul v-else>
    <!-- items go here -->
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    emptyMessage: {
      // message to display when there is no
      // content to be displayed
      type: String,
      default: 'No content',
    },
    dataSource: {
      // array ref to observe length
      default: [],
      required: true,
    },
  },
  computed: {
    isEmpty() {
      const { dataSource } = this
      console.log(dataSource)
      return dataSource ? 
        Boolean(!dataSource.length) : true
    }
  }
}
</script>

<style>
.list-empty-root {
  text-align: center;
  font-weight: 300;
  color: grey;
}
</style>
