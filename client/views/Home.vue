<template>
  <div class="page">
    <folder-list></folder-list>
    <file-list></file-list>
    <editor></editor>
  </div>
</template>

<script>
import FolderList from '../components/FolderList'
import FileList from '../components/FileList'
import Editor from '../components/Editor'

export default {
  components: {
    FolderList,
    FileList,
    Editor,
  }
}
</script>

<style>
.page {
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: stretch;
}
</style>

