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
      @click="renameFile"
    >
      Rename file
    </div>
    <div class="file-menu-item folder">
      Move to 
      <select
        class="file-menu-select"
        v-model="selectedMoveFolder"
        @change="moveToFolder"
      >
        <option disabled value="">Select</option>
        <option
          v-for="(value, id) in folderLists"
          :key="id"
          :value="id"
          :selected="selectedMoveFolder === id ? true : false"
        >
          {{ value.name }}
        </option>
      </select>
    </div>
    <div class="file-menu-item delete">
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
      deleteMenuClicked: false
    }
  },
  props: {
    fileData: Object,
    fileId: String
  },
  watch: {
    fileData (val, oldVal) {
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
    }
  },
  methods: {
    showMenu () {
      this.isMenuShowed = true
    },
    hideMenu () {
      this.isMenuShowed = false
    },
    renameFile () {
      const $title = document.getElementById('file-title')
      $title.focus()
      $title.setSelectionRange(0, $title.value.length)
      this.hideMenu()
    },
    moveToFolder () {
      this.$store.commit('files/MOVE_TO_FOLDER', {
        id: this.fileId ,
        folder: this.selectedMoveFolder
      })
    },
    toggleDelete () {
      this.deleteMenuClicked = !this.deleteMenuClicked
    },
    submitDelete () {
      this.$store.commit('files/UNSELECT')
      this.$nextTick(() => {
        this.$store.commit('files/DELETE', { id: this.fileId })
      })
    }
  }
}
</script>

<style>

.file-menu {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2em;
  padding: 3px 20px 12px 13px;
  background: inherit;
}
.file-menu-list {
  font-size: .8rem;
  position: absolute;
  top: 0px;
  right: 0;
  background: #F8FAFC;
  border: solid 1px rgba(0,0,0, .05);
  z-index: 10;
}
.delete-btn {
  padding: 5px;
}
.file-menu-item {
  border-bottom: solid 1px rgba(0,0,0, .05);
  padding: 5px;
  position: relative;
  color: #414a51;

  &:hover {
    background: #ffffff;
  }
  &.folder {
    padding: 0 0 0 5px;
  }

  &.delete {
    padding: 0;
  }


  /* .delete {
    padding: 5px;
  } */

  button {
    font: inherit;
    cursor: pointer;
    display: inline;
    padding: 5px;
    outline: none;
    margin: 0;
    background: none;
    border: none;
    color: inherit;

    &:hover {
      opacity: .8;
    }

  }
}
.file-menu-select {
  background: none;
  font: inherit;
  outline: none;
  cursor: pointer;
  display: inline;
  padding: 5px;
  position: relative;
  top: 0;
}
</style>
