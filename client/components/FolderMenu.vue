<template>
<div
  class="file-menu"
  @click="showMenu"
>
  ⋮
  <div
    class="file-menu-list"
    v-if="isMenuShowed"
    @mouseleave="hideMenu"
  >
    <div
      class="file-menu-item"
      @click="renameFolder"
    >
      Rename folder
    </div>
    <div class="file-menu-item delete"
      v-if="!isAnyFileInFolder"
    >
      <div v-if="deleteMenuClicked">
        <button
          @click="toggleDelete"
        >
          Cancel
        </button>
        <button
          @click="submitDelete"
        >
          I'm sure!
        </button>
      </div>
      <div
        v-if="!deleteMenuClicked"
        @click="toggleDelete"
        class="delete-btn"
      >
        Delete?
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isMenuShowed: false,
      selectedMoveFolder: '',
      deleteMenuClicked: false,
      isFolderEmpty: true,
    }
  },
  props: {
    folderData: Object,
    folderId: String
  },
  watch: {
    folderData (val, oldVal) {
      this.selectedMoveFolder = val.folder
    },
    isMenuShowed (val) {
      if (val === false) {
        this.deleteMenuClicked = false
      }
    }
  },
  computed: {
    folderLists () {
      const folderLists = this.$store.state.folders.lists
      return folderLists
    },
    isAnyFileInFolder () {
      let result = false
      const fileLists = this.$store.state.files.lists
      Object.keys(fileLists).map((item) => {
        const file = fileLists[item]
        if (file.folder === this.folderId) {
          result = true
        }
      })
      return result
    }
  },
  methods: {
    showMenu () {
      this.isMenuShowed = true
    },
    hideMenu () {
      this.isMenuShowed = false
    },
    renameFolder () {
      const $title = document.getElementById('folder-title')
      $title.focus()
      $title.setSelectionRange(0, $title.value.length)
      this.hideMenu()
    },
    toggleDelete () {
      this.deleteMenuClicked = !this.deleteMenuClicked
    },
    submitDelete () {
      this.$store.commit('folders/UNSELECT')
      this.$nextTick(() => {
        this.$store.commit('files/UNSELECT')
        this.$store.commit('folders/DELETE', { id: this.folderId })
      })
    }
  }
}
</script>

<style scoped>
.file-menu {
  padding: 2px 20px 10px 13px;
}
.file-menu-list {
  width: 100px;
}
</style>

