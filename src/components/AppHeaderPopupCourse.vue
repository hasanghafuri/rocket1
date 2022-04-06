<template>
  <div>
    <div @click.self="closed" v-show="openpop" class="AppHeader_pop2">
      <div class="box1">
        <div class="list">
          <AppLogoPop2 />
          <h3 class="h">دوره‌های آموزشی</h3>
          <p class="pharag">لیست دوره‌های آموزشی ویدیویی راکت</p>
        </div>
        <div class="list">
          <AppLogoPop3 />
          <h3 class="h">مسیرهای یادگیری</h3>
          <p class="pharag">مسیرهای یادگیری قدم به قدم برنامه‌نویسی</p>
        </div>
      </div>
      <div class="box2">
        <div class="list">
          <AppLogoPop4 />
          <h3 class="h">پیشرفت من</h3>
          <p class="pharag">مسیر پیشرفت آموزشی شما در راکت</p>
        </div>
        <div class="list">
          <AppLogoPop5 />
          <h3 class="h">گواهی پایان دوره</h3>
          <p class="pharag">گواهی تاییدیه کسب مهارت فنی دوره‌ها</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppLogoPop3 from "./AppLogoPop3.vue";
import AppLogoPop4 from "./AppLogoPop4.vue";
import AppLogoPop5 from "./AppLogoPop5.vue";
import AppLogoPop2 from "./AppLogoPop2.vue";
export default {
  name: "AppHeaderPopupCourse",
  components: {
    AppLogoPop2,
    AppLogoPop3,
    AppLogoPop4,
    AppLogoPop5,
  },
  props: {
    openpop: Boolean,
  },
  methods: {
    closed() {
      this.$emit("closedpop2");
    },
  },
};
</script>
<style scoped>
.AppHeader_pop2 {
  @apply h-60 w-96 bg-white mt-14 px-5 py-5 gap-5 rounded-lg ml-48 overflow-hidden absolute top-64 z-10 right-1/3 cursor-pointer;
}
.box1 {
  @apply flex items-center;
}
.list {
  @apply hover:bg-gray-200 transition-all py-2 px-2 rounded-lg w-2/4;
}
.pharag {
  @apply opacity-50 text-sm;
}
.box2 {
  @apply flex items-center;
}
.h {
  @apply text-xl opacity-80;
}
</style>
