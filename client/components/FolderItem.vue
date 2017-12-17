<template>
  <div
    class="folder-item"
    :class="{ selected: folderId === folderSelected }"
    @click="(e) => folderClick(folderId)"
  >
    <div class="folder-item-title">
      {{ folderSelected === folderId ? '🗁' : '🖿' }} {{ folderData.name }}
    </div>
  </div>
</template>


<script>
export default {
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