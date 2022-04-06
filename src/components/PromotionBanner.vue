<template>
  <div v-if="show" class="Banner">
    <p>
      تخفیف ویژه نوروز راکت، قبل از افزایش قیمت با تخفیف ویژه راکت، دوره‌ات رو
      تهیه کن
    </p>
    <img @click="close" class="close" src="@/assets/icon/close.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "PromotionBanner",
  methods: {
    close() {
      this.show = false;
      sessionStorage.setItem("banner", JSON.stringify(this.show));
    },
  },
  mounted() {
    const banner = JSON.parse(sessionStorage.getItem("banner"));
    this.show = banner ?? true;
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
.Banner {
  @apply bg-green-500 w-5/6 m-auto py-4 px-4 mt-2 text-lg rounded-lg flex justify-between  text-white;
}
.close {
  @apply w-5 h-5 cursor-pointer;
}
</style>
