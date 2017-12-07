<template>
  <div class="file-container">
    <div>
      <button @click="addFolder()">add folder</button>
      <div v-for="item in lists">
        <div class="folder-item">
          <b>{{ item.name }}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lists () {
      return this.$store.state.folder.lists
    }
  },
  methods: {
    addFolder () {
      // $store.commit('folder/ADD', 'folder')
      // this.$store.state.folder.lists
    }
  }
}
</script>

<style>
.file-container {
  width: 240px;
  background: #f6f6f6;

}

.file-input {

}

.file-item {
  padding: 10px;
  border-top: solid 1px #ddd;
  cursor: pointer;
}
</style>
