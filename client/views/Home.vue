<template>
  <div class="page">
    <folder-list></folder-list>
    <file-list></file-list>
  </div>
</template>

<script>
import FolderList from '../components/FolderList'
import FileList from '../components/FileList'

export default {
  components: {
    FolderList,
    FileList
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
  font-family: monospace;
}
</style>

