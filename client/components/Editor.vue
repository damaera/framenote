<template>
  <div class="editor">
    <div class="editor-wrapper">
      <textarea
        class="editor-textarea"
        placeholder="start writing..."
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  data: {

  },
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
  padding: 30px 50px;
  resize: none;
}
</style>
