<template>
  <editor />
</template>

<script>
import { Editor } from '@/components'

export default {
  middleware: 'auth',
  components: { Editor }
}
</script>
