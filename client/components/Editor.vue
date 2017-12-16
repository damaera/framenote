<template>
  <div class="editor">
    <div
      v-show="isAnyFileSelected"
      class="editor-wrapper"
    >
      <input
        class="editor-title"
        placeholder="Title"
        v-model="fileName"
      >
      <textarea
        ref="textarea"
        class="editor-textarea"
        placeholder="Start writing..."
        v-model="contentOfSelected"
      />
    </div>
  </div>
</template>

<script>
import autosize from 'autosize'

let prevId = null

export default {
  mounted () {
    autosize(this.$refs.textarea)
  },
  watch: {
    fileId (val, oldVal) {
      if (val !== oldVal) {
        this.$nextTick(() => {
          this.textAreaResize()
        })
        // setTimeout(() => {
        // }, 10);
      }
    }
  },
  computed: {
    fileId () {
      return this.$store.state.files.selected
    },
    fileName: {
      get () {
        const { lists, selected } = this.$store.state.files
        if (lists[selected]) {
          return lists[selected].name
        }
        return ''
      },
      set (newValue) {
        this.$store.commit('files/CHANGE_TITLE', {
          id: this.$store.state.files.selected,
          name: newValue
        })
      },
    },
    contentOfSelected: {
      get () {
        const { lists, selected } = this.$store.state.files
        if (lists[selected]) {
          return lists[selected].content
        }
        return ''
      },
      set (newValue) {
        this.$store.commit('files/CHANGE_CONTENT', {
          id: this.$store.state.files.selected,
          content: newValue
        })
      }
    },
    isAnyFileSelected () {
      return this.$store.state.files.selected !== null
    }
  },
  methods: {
    textAreaResize () {
      autosize.update(this.$refs.textarea)
    }
  }
}
</script>

<style>
.editor {
  flex-grow: 1;
  overflow: auto;
  background: #F8FAFC;
}
.editor-title {
  font-weight: bold;
  font-family: 'Roboto Mono', monospace;
  padding: 15px 50px; 
  border: none;
  font-size: 1em;
  outline: none;
  width: 640px;
  box-sizing: border-box;
  border-right: solid 1px rgba(0,0,0,.05);
  border-bottom: solid 1px rgba(0,0,0,.05);
}
textarea {
  margin: 0;
  padding: 0;
}
.editor-textarea {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  box-sizing: border-box;
  line-height: 1.5;
  color: inherit;
  font-size: 1em;
  min-width: 640px;
  max-width: 640px;
  border: none;
  background: #fff;
  border-right: solid 1px rgba(0,0,0,.05);
  border-bottom: solid 1px rgba(0,0,0,.05);
  outline: none;
  margin: 0;
  padding: 30px 50px; 
  resize: none;
}
</style>
