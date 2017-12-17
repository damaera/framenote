<template>
  <div
    class="folder-container"
    @click="clickOutside"
  > 
    <div class="folder-header">
      Folder 
    </div>
    <div>
      <div
        v-for="(value, id) in lists"
        :key="id"
      >
        <folder-item
          :folderData="value"
          :folderId="id"
        />
      </div>
    </div>
    <item-add
      input-type="folders"
    />
  </div>
</template>

<script>
import ItemAdd from './ItemAdd'
import FolderItem from './FolderItem'

export default {
  components: {
    ItemAdd,
    FolderItem
  },
  computed: {
    lists () {
      const folderLists = this.$store.state.folders.lists
      return folderLists
    },
    anyFileSelected () {
      const { selected } = this.$store.state.files
      return !!selected
    },
  },
  methods: {
    clickOutside (e) {
      if (e.target.classList.contains('folder-container')) {
        this.$store.commit('folders/UNSELECT')
        this.$store.commit('files/UNSELECT')
      }
    }
  }
}
</script>

<style>
.folder-container {
  max-width: 200px;
  min-width: 200px;
  background: #F1F4F9;
  border-right: solid 1px rgba(0,0,0, .05);
}

.folder-header {
  padding: 15px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
}

.folder-item {
  padding: 15px 10px;
  cursor: pointer;
  border-bottom: solid 1px rgba(0,0,0, .05);
  &:hover {
    /* opacity: .8; */
    background: #F8FAFC;
  }
  &.selected {
    /* box-shadow: 0 0 1px #0099CC; */
    background: #F8FAFC;
    color: #E46D69;
  }
}
.folder-item-title {
  font-weight: bold;
  margin-bottom: 5px;
}
.folder-item-desc {
  font-size: .8em;
}
</style>
