<template>
  <div
    class="folder-container"
    @click="clickOutside"
  >
    <div class="folder-header">
      ./FOLDERS/
    </div>
    <div>
      <div v-for="(value, id) in lists" :key="id">
        <div
          class="folder-item"
          :class="{ selected: id === selected }"
          @click="(e) => folderClick(id)"
        >
          <div class="folder-item-title">
            {{ value.name }}
          </div>
        </div>
      </div>

      <div
        v-if="!newFolderClicked"
        class="folder-add"
        @click="toggleClick"
      >
        + New folder
      </div>
      <div
        v-if="newFolderClicked"
        class="folder-add-input"
      >
        <form @submit="submitNewFolder">
          <input
            type="text"
            @blur="newFolderBlur"
            placeholder="Folder Name..."
            ref="inputFolder"
            v-model="newFolderName"
          >
          <input type="submit" class="input-submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newFolderClicked: false,
      newFolderName: '',
    }
  },
  computed: {
    lists () {
      return this.$store.state.folders.lists
    },
    selected () {
      return this.$store.state.folders.selected
    },
    anyFileSelected () {
      const { selected } = this.$store.state.files
      return !!selected
    },
  },
  methods: {
    submitNewFolder (e) {
      e.preventDefault();
      this.$store.commit('folders/CREATE', { name: this.newFolderName })
      this.newFolderName = ''
    },
    toggleClick () {
      this.newFolderClicked = !this.newFolderClicked
      this.$nextTick(() => {
        if (this.newFolderClicked === true) {
          this.$refs.inputFolder.focus()
        }
      })
    },
    folderClick (id) {
      this.$store.commit('folders/SELECT', { id })
    },
    newFolderBlur () {
      this.toggleClick()
      this.newFolderName = ''
    },
    clickOutside (e) {
      if (e.target.classList.contains('folder-container')) {
        // this.$store.commit('folders/UNSELECT')
      }
    }
  }
}
</script>

<style>
.folder-container {
  width: 240px;
  background: #F1F4F9;
  border-right: solid 1px rgba(0,0,0, .05);
}

.folder-header {
  padding: 15px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
}

.folder-add-input {
  border-bottom: solid 2px #0099cc;
  padding: 15px 10px;
  font-size: 1em;
  input {
    background: none;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 1em;
    font-weight: bold;
  }
  &:hover {
    opacity: .8;
    background: #F8FAFC;
  }
}

.input-submit {
  display: none;
}

.folder-add {
  padding: 15px 10px;
  border-bottom: solid 2px rgba(0,0,0, .05);
  font-weight: bold;
  color: #0099cc;
  cursor: pointer;
  &:hover {
    opacity: .8;
    background: #F8FAFC;
  }
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
