<template>
  <div class="file-container">
    <div>
      Test
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lists () {
      return this.$store.state.files.lists
    }
  },
  methods: {}
}
</script>

<style>
.file-container {
  width: 240px;
  background: #F8FAFC;
  border-right: solid 1px rgba(0,0,0, .05);
}

.file-input {

}

.file-item {
  padding: 10px;
  border-top: solid 1px rgba(0,0,0, .05);
  cursor: pointer;
}
</style>
