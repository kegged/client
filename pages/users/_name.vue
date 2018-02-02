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
          <List
            :emptyMessage="`${user.userName} has not yet posted.`"
            :dataSource="user.posts"
            class="profile-page-list">
            <ProfPost 
              v-for="post in user.posts" 
              :key="post.id" 
              :post="post"
              class="prof-post"></ProfPost>
          </List>
        </el-tab-pane>
        <el-tab-pane label="Comments" name="second">
          <List
            :emptyMessage="`${user.userName} has not yet commented.`"
            :dataSource="user.comments"
            class="profile-page-list">
            <ProfComment 
              v-for="comment in user.comments" 
              :key="comment.id" 
              :comment="comment"
              class="prof-comment"/>
          </List>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { Message } from 'element-ui'

import axios from '@/plugins/axios'
import { ProfPost, ProfComment, List } from '@/components'

export default {
  components: { ProfPost, ProfComment, List },
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

.profile-page-list {
  margin-top: 20px;
}
</style>
