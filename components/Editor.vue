<template>
  <el-row ref="editor"
    class="editor editor-container"
    :gutter="10"
  >
    <el-col ref="editor-inner"
      :xs="22" :sm="20" :md="16" :lg="14" :xl="12"
    >
      <!-- title -->
      <input
        class="editor-title-input"
        v-model="title"
        :placeholder="'*' + titlePlaceholder"
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
        class="editor-input-new-tag"
        v-if="tagInputVisible"
        v-model="tagInput"
        size="mini"
        @keyup.enter.native="handleTagSave"
        @blur="handleTagSave"
      />
      <el-button v-else
        class="editor-button-new-tag"
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
            v-model="content"
            @keydown.tab="addIndent"
          />
        </el-tab-pane>
        <el-tab-pane label="Preview">
          <markdown
            class="editor-preview"
            :source="content"
            breaks
            emoji
            typographer
          />
        </el-tab-pane>
      </el-tabs>
      <el-button
        type="warning"
        :disabled="readyForSubmission"
        class="editor-save-button"
        @click="emitSubmit"
      >
        Save post
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    titlePlaceholder: {
      type: String,
      default: 'Post Title',
    },
    initialContent: {
      type: String,
      default: '# Hello World\n',
    },
    initialTitle: {
      type: String,
      default: '',
    },
    initialTags: [],
  },
  name: 'App',
  data() {
    return {
      title: this.initialTitle,
      content: this.initialContent,
      tags: [],
      tagInput: '',
      tagInputVisible: false,
    }
  },
  methods: {
    addIndent(e) {
      e.preventDefault()
      this.contet += '\t'
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
    },

    emitSubmit(e) {
      e.preventDefault()

      const { content, title, tags } = this
      this.$emit('submit', {content, title, tags})
    }
  },
  computed: {
    readyForSubmission() {
      const { content, title } = this
      return !(content.length && title.length)
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
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  margin-top: 10px;
  border: 1px solid #545c64;
}

.editor-title-input {
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  background: transparent;
  display: flex;
  outline: none !important;
  border: none !important;
  font-weight: 500;
  font-size: 1.5em;
  padding: 10px -10px;
  margin-bottom: 10px;
  width: 100%;
}

.editor-button-new-tag {
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 10px;
  font-weight: bold;
}

.editor-input-new-tag {
  height: 32px;
  margin-bottom: 10px;
  width: 90px;
}
</style>

<style>
/* globals */
.editor .el-tag,
.editor .editor-button-new-tag {
  font-family: 'Courier', sans-serif;
  border: 1px solid #545c64;
}

.editor .el-tabs--border-card>.el-tabs__header,
.editor .el-tabs__item.is-active {
  color: #f18e1c !important;
}

.editor .el-tabs--border-card>.el-tabs__header,
.editor .el-tabs__item {
  color: #ebb563 !important;
}

.editor .el-tabs__nav-scroll {
  background: #545c64 !important;
}

/* tag text */
.editor span.el-tag,
.editor i.el-tag__close.el-icon-close {
  color: #f8f8ff;
  font-weight: bold;
}

.editor .el-tag {
  margin-right: 5px;
}
</style>

