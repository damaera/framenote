<template>
  <div
    class="file-container"
    v-if="anyFolderSelected"
  >
    <!-- header -->
    <div class="file-header">
      ./{{ folderSelected.name }}/
    </div>

    <!-- lists -->
    <div
      v-for="(v, id) of fileListsSelected"
      :key="id"
      v-if="v.folder === $store.state.folders.selected">
      <div
        class="folder-item"
        :class="{ selected: id === fileSelected }"
        @click="() => fileClick(id)"
      >
        <div class="folder-item-title">
          {{ v.name }}
        </div>
        <div class="folder-item-desc">
          0 characters
        </div>
      </div>
    </div>

    <!-- input -->
    <div
      v-if="!addClicked"
      class="folder-add"
      @click="toggleClick"
    >
      + New file
    </div>
    <div
      v-if="addClicked"
      class="folder-add-input"
    >
      <form @submit="submitNewFile">
        <input
          type="text"
          @blur="toggleClick"
          placeholder="File Name..."
          ref="inputFolder"
          v-model="newFileName"
        >
        <input type="submit" class="input-submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addClicked: false,
      newFileName: '',
    }
  },
  computed: {
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
      this.addClicked = !this.addClicked
      if (this.addClicked === true) {
        setTimeout(() => {
          this.$refs.inputFolder.focus()
        }, 100);
      }
    },
    submitNewFile (e) {
      e.preventDefault()
      this.$store.commit('files/CREATE', {
        name: this.newFileName,
        folder: this.$store.state.folders.selected
      })
      this.newFileName = ''
    },
    fileClick (id) {
      this.$store.commit('files/SELECT', { id })
    },
  }
}
</script>

<style>
.file-container {
  width: 240px;
  background: #F8FAFC;
  border-right: solid 1px rgba(0,0,0, .05);
}

.file-header {
  padding: 20px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
  font-weight: bold;
}

.file-input {

}

.file-item {
  padding: 20px 10px;
  cursor: pointer;
  border-bottom: solid 1px rgba(0,0,0, .05);
  &:hover {
    /* opacity: .8; */
    background: #F8FAFC;
  }
  &.selected {
    /* box-shadow: 0 0 1px #0099CC; */
    background: #ffffff;
  }
}
</style>
