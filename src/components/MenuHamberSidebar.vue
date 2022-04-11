<template>
  <div v-show="hamberside" class="menu-sidbar-hamber">
    <div class="head">
      <img
        @click="closehamber"
        class="image"
        src="@/assets/icon/close.png/"
        alt=""
      />
      <Logo />
      <div class="search">
        <input class="input" type="tex" placeholder="دنبال چی می گردی؟" />
      </div>
    </div>
    <div class="li-menu-hamber">
      <li>صفحه اصلی</li>
      <li class="arrow flex cursor-pointer">
        <span>دوره های آموزشی</span>
        <span> <img src="@/assets/image/arrow.png/" alt="" /></span>
      </li>
      <li>پرسش و پاسخ ها</li>
      <li>مقالات</li>
      <li>راکت کست</li>
      <li class="arrow cursor-pointer flex">
        <span>لینک های مفید</span>
        <span>
          <img class="Menu_arrow2" src="@/assets/image/arrow.png/" alt=""
        /></span>
      </li>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
export default {
  name: "MenuHamberSidebar",
  components: {
    Logo,
  },
  props: {
    hamberside: Boolean,
  },
  methods: {
    closehamber() {
      this.$emit("closemenu");
    },
  },
};
</script>
<style scoped>
.menu-sidbar-hamber {
  @apply fixed top-0  right-0 h-full w-96 bg-white overflow-hidden list-none  rounded-lg border-gray-400 translate-x-full  py-5 px-4 border-t-0 rounded-t-none hidden z-50;
}
.image {
  @apply w-5 h-6 absolute top-5 left-6  object-cover cursor-pointer;
}
.li-menu-hamber {
  @apply p-7 text-lg flex flex-col   gap-7 mt-8;
}
.head {
  @apply flex flex-col gap-4 p-7;
}
.input {
  @apply bg-gray-200 w-56 py-4 px-3 rounded-lg text-center  bg-opacity-40;
}
.search {
  @apply w-80;
}
@media screen and (max-width: 750px) {
  .menu-sidbar-hamber {
    @apply block;
  }
}
</style>
