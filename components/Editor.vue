<template>
  <el-row ref="editor"
    class="editor-container"
    :gutter="10"
  >
    <el-col ref="editor-inner"
      :xs="22" :sm="20" :md="16" :lg="14" :xl="12"
    >
      <!-- title -->
      <input
        class="title-input"
        v-model="title"
        placeholder="Post title*"
      />
      <!-- tags -->
      <el-tag
        closable
        color="#ebb563"
        v-for="tag in tags"
        :key="tag"
        :disable-transitions="false"
        @close="handleTagClose(tag)">
        {{tag}}
      </el-tag>
      <!-- tag input -->
      <el-input
        ref="saveTagInput"
        class="input-new-tag"
        v-if="tagInputVisible"
        v-model="tagInput"
        size="mini"
        @keyup.enter.native="handleTagSave"
        @blur="handleTagSave"
      />
      <el-button v-else
        class="button-new-tag"
        size="small"
        @click="showTagInput"
      >
        + New Tag
      </el-button>
      <!-- editor tab card root -->
      <el-tabs type="border-card">
        <el-tab-pane label="Edit">
          <textarea
            class="editor-source"
            v-model="post"
            @keydown.tab="addIndent"
          />
        </el-tab-pane>
        <el-tab-pane label="Preview">
          <markdown
            class="editor-preview"
            :source="post"
            breaks
            emoji
            typographer
          />
        </el-tab-pane>
      </el-tabs>
      <el-button
        :disabled="readyForSubmission"
        class="editor-save-button"
      >
        Save post
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import markdown from 'vue-markdown'

export default {
  name: 'App',
  components: { markdown },
  data() {
    return {
      title: '',
      post: '# Hello\n## World\nI **like** H~2~0',
      tags: ['foo'],
      tagInput: '',
      tagInputVisible: false,
    }
  },
  methods: {
    addIndent(e) {
      e.preventDefault()
      this.post += '\t'
    },

    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleTagClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },

    handleTagSave(e) {
      const { tagInput } = this
      if (tagInput.length) {
        this.tags.push(tagInput)
      }
      this.tagInputVisible = false
      this.tagInput = ''
    }
  },
  computed: {
    readyForSubmission() {
      const { post, title } = this
      return !(post.length && title.length)
    }
  },
}
</script>

<style>
.editor-container {
  margin: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor-source, .editor-preview {
  height: 50vh;
}

.editor-source {
  font-size: 1.1em;
  margin: 0;
  outline: none !important;
  resize: none;
  width: 100%;
  border: none;
}

.editor-save-button {
  margin-top: 10px;
  margin-left: 10px;
}

.title-input {
  font-family: Courier, monospace;
  background: transparent;
  display: flex;
  outline: none !important;
  border: none !important;
  font-weight: 500;
  font-size: 1.5em;
  padding: 10px -10px;
  margin-top: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  width: 50%;
  min-width: 400px;
}

.el-tag + .el-tag,
.button-new-tag,
.input-new-tag {
  margin-left: 5px;
}

.button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 10px;
}

.input-new-tag {
  height: 32px;
  margin-bottom: 10px;
  width: 90px;
}

.el-tag, .button-new-tag,
.input-new-tag {
  font-family: Courier, monospace;
}

.el-tabs--border-card>.el-tabs__header,
.el-tabs__item.is-active {
  color: #f18e1c !important;
}

.el-tabs--border-card>.el-tabs__header,
.el-tabs__item {
  color: #ebb563 !important;
}

.el-tabs__nav-scroll {
  background: #545c64 !important;
}
</style>
