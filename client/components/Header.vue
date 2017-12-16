<template>
  <div class="header">
    <div class="header-flex">
      FRAMENOTE.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
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
  height: 50px;
  display: flex;
  align-items: center;
}
.login-button {
  font: inherit;
  padding: 10px 15px;
  background: #3399cc;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
}
.ava {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>

