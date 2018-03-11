<template>
  <div id="app">
    <header-app />
    <div class="page">
      <folder-list />
      <file-list />
      <editor />
    </div>
  </div>
</template>

<script>
import FolderList from './FolderList'
import FileList from './FileList'
import Editor from './Editor'
import HeaderApp from './Header'

export default {
  components: {
    FolderList,
    FileList,
    Editor,
    HeaderApp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:500,500i,700,700i');

body {
  margin: 0;
  font-size: 14px;
  color: #414a51;
  font-family: 'Roboto mono', monospace;
  font-weight: 500;
  background: #F8FAFC;

  * {
    /* transition: all .1s; */
  }
}
.page {
  height: calc(100vh - 31px);
  width: 100%;
  background: #fff;
  display: flex;
  align-items: stretch;
}
</style>


