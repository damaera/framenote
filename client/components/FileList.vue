<template>
  <div
    class="file-container"
    v-if="anyFolderSelected"
    @click="clickOutside"
  >
    <!-- header -->
    <div class="file-header">
      {{ folderSelected.name }} / 
    </div>

    <!-- lists -->
    <div
      v-for="(v, id) of fileListsSelected"
      :key="id"
      v-if="v.folder === selected">
      <file-item
        :file-data="v"
        :file-id="id"
      />
    </div>

    <!-- input -->
    <item-add
      input-type="files"
    />
    
  </div>
</template>

<script>

import FileItem from './FileItem'
import ItemAdd from './ItemAdd'

export default {
  components: {
    FileItem,
    ItemAdd
  },
  computed: {
    selected () {
      return this.$store.state.folders.selected
    },
    anyFolderSelected () {
      const { selected } = this.$store.state.folders
      return !!selected
    },
    folderSelected () {
      const { selected } = this.$store.state.folders
      return this.$store.state.folders.lists[selected]
    },
    fileListsSelected () {
      const { selected } = this.$store.state.folders
      return this.$store.state.files.lists
    }
  },
  methods: {
    clickOutside (e) {
      if (e.target.classList.contains('file-container')) {
        this.$store.commit('files/UNSELECT')
      }
    }
  }
}
</script>

<style>
.file-container {
  max-width: 240px;
  min-width: 240px;
  background: #F8FAFC;
  border-right: solid 1px rgba(0,0,0, .05);
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  text-overflow: ellipsis;
}

.file-header {
  padding: 15px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
  font-weight: bold;
}
</style>
