<template>
  <div @click="showback" class="menu_hamber">
    <div class="ham">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuHamber",
  methods: {
    showback() {
      this.$emit("trueback");
    },
  },
};
</script>
<style scoped>
.menu_hamber {
  display: none;
}
.menu_hamber .line {
  width: 40px;
  height: 8px;
  border-radius: 6px;
  background: orange;

  margin-bottom: 4px;
}
@media screen and (max-width: 750px) {
  .menu_hamber {
    display: block;
  }
}
</style>
