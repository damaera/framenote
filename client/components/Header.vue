<template>
  <div class="header">
    <div class="header-flex">
      Framenote.
    </div>
    <!-- <a
      :href="downloadData"
      download="data.json"
    >
      <button>
        Download All Content
      </button>
    </a> -->
  </div>
</template>

<script>
export default {
  computed: {
    downloadData () {
      const vuexData = localStorage.getItem('vuex')
      return "data:text/json;charset=utf-8," + encodeURI(JSON.stringify(vuexData));
    }
  },
  methods: {
  }
}
</script>
<style>
.header {
  background: #F1F4F9;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(0,0,0, .05);
}
.header-flex {
  height: 30px;
  display: flex;
  align-items: center;
}
</style>

