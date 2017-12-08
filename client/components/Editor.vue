<template>
  <div class="editor">
    <div class="editor-wrapper">
      <textarea
        class="editor-textarea"
        placeholder="start writing..."
        @change="onChange"
        v-model="contentOfSelected"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // content: ''
    }
  },
  computed: {
    contentOfSelected: {
      get () {
        const { lists, selected } = this.$store.state.files
        return lists[selected].content
      },
      set (newValue) {
        this.$store.commit('files/CHANGE_CONTENT', {
          id: this.$store.state.files.selected,
          content: newValue
        })
      }
    }
  },
  methods: {
    onChange (e) {
      console.log(this.contentOfSelected)
    }
  }
}
</script>

<style>
.editor {
  flex-grow: 1;
  overflow: hidden;
}
textarea {
  margin: 0;
  padding: 0;
}
.editor-textarea {
  font-family: 'Ubuntu Mono', monospace;
  box-sizing: border-box;
  line-height: 1.5;
  color: inherit;
  font-size: 1em;
  min-width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding: 100px 50px 30px 50px; 
  resize: none;
}
</style>
