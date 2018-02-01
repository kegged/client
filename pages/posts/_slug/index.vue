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
          <span>by<strong>{{ ' ' + post.user.userName }}</strong></span>
          <timeago class="viewpost-post-time" :auto-update="true" :since="Date.parse(post.updatedAt)" />
        </div>
      </div>
      <el-button type="text" @click="handleAddComment">Add comment.</el-button>
      <el-input 
        class="new-comment-input" 
        type="textarea" 
        :rows="2" 
        placeholder="new comment" 
        v-if="isAddingComment"
        @keydown.native.enter="postComment"
        v-model="newComment"/>
      <h2 class="num-comments">{{ commentsHeader }}</h2>
      <ul>
        <comment 
          class="post-comments" 
          :comment="comment" 
          v-for="comment in post.comments" 
          :key="comment.id"/>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '@/plugins/axios'
import markdown from 'vue-markdown'
import { Message } from 'element-ui'
import { Comment } from '@/components'

export default {
  components: { markdown, Comment },
  data() {
    return {
      isAddingComment: false,
      newComment: ""
    }
  },
  methods: {
    handleAddComment() {
      if (!this.isAuthenticated) {
        return this.$router.push(`/login?cbUrl=${this.$route.fullPath}`)
      }
      this.isAddingComment = !this.isAddingComment
    },
    async postComment(e) {
      e.preventDefault()
      try { 
        const { data } = await axios.post("comments", { 
          content: this.newComment,
          postId: this.post.id,
          userId: this.user.id
        })
        this.newComment = ""
        this.isAddingComment = false
        this.post.comments.unshift({...data.newComment, user: this.user})
      } catch (error) {
        Message({ 
          type: "error", 
          message: "Could not create comment at this time, please try again later."
        })
      }
    }
  },
  computed: {
    ...mapGetters( ["isAuthenticated", "user"] ),
    commentsHeader() {
      const { length } = this.post.comments

      if (!length) return ''
      return `${length} Comment${ length > 1 ? 's' : '' }`

    }
  },
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
  border-bottom: 2px solid #ebb563;
  color: #545c64;
  font-weight: bolder;
}

.post-content {
  margin-bottom: 30px;
  margin-left: 15px;
  color: #545c64;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #ebb563;
  color: #545c64;
}

.post-tags {
  flex-grow: 1;
}

.post-tag {
  color: #fff;
}

.post-tag + .post-tag {
  margin-left: 5px;
}

.new-comment-input {
  display: block;
  width: 50%;
  min-width: 400px;
}

.num-comments {
  color: #545c64;
}

.post-comments + .post-comments {
  border-top: 1px solid #ebb563;
}

.viewpost-post-time {
  display: block;
  margin-top: 3px;
  font-size: 0.8em;
}
</style>
