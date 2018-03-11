<template>
  <div
    class="folder-item"
    :class="{ selected: folderId === folderSelected }"
    @click="(e) => folderClick(folderId)"
  >
    <div class="folder-item-title">
      ▶ {{ folderData.name }}
    </div>
    <folder-menu
      :folder-data="folderData"
      :folder-id="folderId"
    />
  </div>
</template>


<script>
import FolderMenu from './FolderMenu'

export default {
  components: {
    FolderMenu
  },
  props: {
    folderData: Object,
    folderId: String
  },
  computed: {
    folderSelected () {
      return this.$store.state.folders.selected
    },
  },
  methods: {
    folderClick (id) {
      this.$store.commit('folders/SELECT', { id })
    },
  }
}
</script>

<style>
.folder-item {
  position: relative;
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
</style>
