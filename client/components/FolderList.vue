<template>
  <div class="folder-container">
    <div class="folder-header">
      Framenote.
    </div>
    <div>
      <div v-for="(item, index) in lists" :key="index">
        <div class="folder-item">
          <div class="folder-item-title">
            {{ item.name }}
          </div>
          <div class="folder-item-desc">
            0 files
          </div>
        </div>
      </div>

      <div class="folder-add" v-if="addClicked">
        <form @submit="submitAdd">
          <input
            type="text"
            class="folder-add-input"
            @blur="$store.commit('folders/TOGGLE_ADD_CLICKED')"
          >
          <input type="submit">
        </form>
      </div>
      <div
        class="folder-add"
        v-if="!addClicked"
        @click="$store.commit('folders/TOGGLE_ADD_CLICKED')"
      >
        + Add folder
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lists () {
      return this.$store.state.folders.lists
    },
    addClicked () {
      return this.$store.state.folders.addClicked
    }
  },
  methods: {
    submitAdd (e) {
      e.preventDefault();
      
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
  padding: 20px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
}

.folder-add-input {
  background: none;
  border: none;
  outline: none;
  font-size: 1em;
  font-family: inherit;
  border-bottom: solid 1px #0099cc;
  padding: 10px 0;
}

.folder-add {
  padding: 20px 10px;
  border-bottom: solid 1px rgba(0,0,0, .05);
  font-weight: bold;
  color: #0099cc;
  cursor: pointer;
}

.folder-item {
  padding: 20px 10px;
  cursor: pointer;
  border-bottom: solid 1px rgba(0,0,0, .05);
  &:hover {
    opacity: .8;
    box-shadow: 0 0 1px #0099CC;
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
