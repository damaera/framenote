<template>
  <div
    class="file-container"
    v-if="anyFolderSelected"
    @click="clickOutside"
  >
    <!-- header -->
    <div class="file-header">
      ./{{ folderSelected.name }}/
    </div>

    <!-- lists -->
    <div
      v-for="(v, id) of fileListsSelected"
      :key="id"
      v-if="v.folder === selected">
      <div
        class="file-item"
        :class="{ selected: id === fileSelected }"
        @click="() => fileClick(id)"
      >
        <div class="folder-item-title">
          🗎 {{ v.name || 'Untitled' }}
        </div>
        <div class="folder-item-desc">
          {{ v.content || 'No content' }}
        </div>
      </div>
    </div>

    <!-- input -->
    <div
      v-if="!newFileClicked"
      class="folder-add"
      @click="toggleClick"
    >
      + New file
    </div>
    <div
      v-if="newFileClicked"
      class="folder-add-input"
    >
      <form @submit="submitNewFile">
        <input
          type="text"
          @blur="newFileBlur"
          placeholder="File Name..."
          ref="inputFile"
          v-model="newFileName"
        >
        <input
          type="submit"
          class="input-submit"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newFileClicked: false,
      newFileName: '',
    }
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
    },
    fileSelected () {
      return this.$store.state.files.selected
    }
  },
  methods: {
    toggleClick () {
      this.newFileClicked = !this.newFileClicked
      this.$nextTick(() => {
        if (this.newFileClicked === true) {
          this.$refs.inputFile.focus()
        } else {
          this.$refs.inputFile.blur()
        }
      })
    },
    submitNewFile (e) {
      e.preventDefault()
      this.$store.commit('files/CREATE', {
        name: this.newFileName,
        folder: this.$store.state.folders.selected
      })
      this.$nextTick(() => {
        this.newFileClicked = false
      })
      this.toggleClick()
      this.$store.commit('files/SELECT', { id: true })
    },
    fileClick (id) {
      this.$store.commit('files/SELECT', { id })
    },
    clickOutside (e) {
      if (e.target.classList.contains('file-container')) {
        this.$store.commit('files/UNSELECT')
      }
    },
    newFileBlur () {
      this.toggleClick()
      this.newFileName = ''
    },
  }
}
</script>

<style>
.file-container {
  max-width: 240px;
  min-width: 200px;
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

.file-input {

}

.file-item {
  padding: 15px 10px;
  cursor: pointer;
  border-bottom: solid 1px rgba(0,0,0, .05);
  &:hover {
    /* opacity: .8; */
    background: #ffffff;
  }
  &.selected {
    /* box-shadow: 0 0 1px #0099CC; */
    background: #ffffff;
    color: #E46D69;
  }
}
</style>
