<template>
  <div
    class="file-item"
    :class="{ selected: fileId === fileSelected }"
    @click="() => fileClick(fileId)"
  >
    <div class="file-item-title">
      • {{ fileData.name || 'Untitled' }}
    </div>
    <div class="file-item-desc">
      {{ fileData.content || 'No content' }}
    </div>
    <file-menu
      :file-data="fileData"
      :file-id="fileId"
    />
  </div>
</template>

<script>
import FileMenu from './FileMenu'

export default {
  props: {
    fileData: Object,
    fileId: String
  },
  components: {
    FileMenu
  },
  computed: {
    fileSelected () {
      return this.$store.state.files.selected
    }
  },
  methods: {
    fileClick (id) {
      this.$store.commit('files/SELECT', { id })
    }
  }
}
</script>

<style>
.file-item {
  position: relative;
  padding: 15px 10px;
  cursor: pointer;
  border-bottom: solid 1px rgba(0,0,0, .05);
  background: #F8FAFC;
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

.file-item-title {
  font-weight: bold;
  margin-bottom: 5px;
}
.file-item-desc {
  position: relative;
  left: 18px;
  font-size: .8em;
}
</style>