<template>
  <el-row
    class="post-container"
    :gutter="10"
  >
    <el-col ref="post-inner"
      :xs="22" :sm="20" :md="16" :lg="14" :xl="12"
    >
      <h1 class="post-title">
        {{post.title}}
      </h1>
      <markdown class="post-content" :source="post.content"/>
      <div class="post-footer">
        <div class="post-tags">
          <el-tag
            class="post-tag"
            color="#ebb563"
            v-for="tag in post.tags"
            :key="tag.id"
            :disable-transitions="false"
          >
            {{tag.tag.name}}
          </el-tag>
        </div>
        <div>
          by<strong>{{ ' ' + post.user.userName }}</strong>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from '@/plugins/axios'
import markdown from 'vue-markdown'

export default {
  components: { markdown },
  async asyncData({ params, error }) {
    const { slug } = params
    try {
      const { data } = await axios.get(`posts/${slug}`)
      return { post: data.post }
    } catch (err) {
      console.error(err)
      error({ statusCode: 404, message: 'Post not found' })
    }
  }
}
</script>

<style>
.post-container {
  margin: 0 !important;
  display: flex;
  justify-content: center;
}

.post-title {
  font-size: 2.4em;
  border-bottom: 1px solid #000;
}

.post-content {
  margin-bottom: 30px;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
}

.post-tags {
  flex-grow: 1;
}

.post-tag {
  margin-left: 5px;
  color: #fff;
}
</style>
