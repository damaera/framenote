<template>
  <div
    class="file-item"
    :class="{ selected: fileId === fileSelected }"
    @click="() => fileClick(fileId)"
  >
    <div class="folder-item-title">
      🗎 {{ fileData.name || 'Untitled' }}
    </div>
    <div class="folder-item-desc">
      {{ fileData.content || 'No content' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileData: Object,
    fileId: String
  },
  computed: {
    fileSelected () {
      return this.$store.state.files.selected
    }
  },
  methods: {
    fileClick (id) {
      this.$store.commit('files/SELECT', { id })
    },
  }
}
</script>

<style>
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