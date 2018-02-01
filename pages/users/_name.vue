<template>
  <el-row
    class="profile-container"
    :gutter="10"
  >
    <el-col ref="profile-inner"
      :xs="22" :sm="20" :md="16" :lg="14" :xl="12"
    >
      <h1 class="profile-user">
        {{ user.userName }}
      </h1>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Posts" name="first">
          <ul>
            <ProfPost 
              v-for="post in user.posts" 
              :key="post.id" 
              :post="post"
              class="prof-post"></ProfPost>
          </ul>
          <NoContent v-if="!user.posts.length" name="You haven't posted."/>
        </el-tab-pane>
        <el-tab-pane label="Comments" name="second">
          <ul>
            <ProfComment 
              v-for="comment in user.comments" 
              :key="comment.id" 
              :comment="comment"
              class="prof-comment"></ProfComment>
          </ul>
          <NoContent v-if="!user.comments.length" name="No comments found."/>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '@/plugins/axios'
import markdown from 'vue-markdown'
import { Message } from 'element-ui'
import { ProfPost } from '@/components'
import { ProfComment } from '@/components'
import { NoContent } from '@/components'

export default {
  components: { ProfPost, ProfComment, NoContent },
  async asyncData({ error, params }) {
    const { name } = params
    try {
      const { data } = await axios.get(`/users/${ name }`)
      return { user: data.user }
    } catch (err) {
      error({ statusCode: 404, message: "User not found." })
    }
  },
  data() {
    return {
      activeTab: "first"
    }
  }
}
</script>

<style>
.profile-container {
  margin: 0 !important;
  display: flex;
  justify-content: center;
}

.profile-user {
  font-size: 2.4em;
  border-bottom: 2px solid #ebb563;
  color: #545c64;
  font-weight: bolder;
}

.prof-comment + .prof-comment, .prof-post + .prof-post {
  border-top: 1px solid #ebb563;
}
</style>
