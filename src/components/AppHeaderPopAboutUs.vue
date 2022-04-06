<template>
  <div v-show="open" @click.self="closepopUp" class="appheader-pop1">
    <ul class="list">
      <li>کانال تلگرام</li>
      <li>سوالات متداول</li>
      <li>درباره‌ما</li>
      <li>همکاری باما</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeaderPopAboutUs.vue",
  data() {
    return {};
  },
  props: {
    open: Boolean,
  },
  methods: {
    closepopUp() {
      this.$emit("closed");
    },
  },
};
</script>
<style scoped>
.appheader-pop1 {
  @apply bg-white text-opacity-70 mt-14 px-6  h-auto  rounded-xl absolute top-64 left-1/4;
}
.list li {
  @apply my-4 py-4 px-16 hover:bg-gray-200  transition duration-300 rounded-lg cursor-pointer  text-justify opacity-70;
}
</style>
