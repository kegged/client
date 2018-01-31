<template>
  <editor
    @submit="savePost"
    :titlePlaceholder="titlePlaceholder"
  />
</template>

<script>
import { Message } from 'element-ui'

import axios from '@/plugins/axios'
import { Editor } from '@/components'

export default {
  middleware: 'auth',
  components: { Editor },
  computed: {
    breweryId() { return this.$route.query.breweryId || undefined },
    breweryName() { return this.$route.query.breweryName || undefined },
    titlePlaceholder() {
      const { breweryName } = this
      return breweryName ? `Post about ${breweryName}` : undefined
    }
  },
  methods: {
    async savePost(newPostData) {
      try {
        const { data } = await axios.post('posts', {
          breweryId: this.breweryId,
          ...newPostData
        })

        console.log(data)
        this.$router.push(`/posts/${data.newPost.slug}`)
      } catch (err) {
        console.error(`Error adding post: ${err.message}`)
        Message({ type: 'error', message: 'Error saving post. Try again later' })
      }
    }
  }
}
</script>
