<template>
  <div class="herosection_content">
    <div class="content w-1/2">
      <h1 class="title text-6xl opacity-80">
        داستان برنامه‌نویس شدنت از اینجا شروع میشه!
      </h1>
      <p class="pharag opacity-50 text-2xl">
        یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید،
        بقیه‌اش با راکت
      </p>
      <span>
        <router-link
          class="btn bg-blue-500 hover:bg-gray-400 transition-colors cursor-pointer text-center px-4 py-4 text-white rounded-lg w-2/4"
          to="/HeroSectionRedirect"
        >
          شروع یادگیری برنامه‌نویسی</router-link
        >
      </span>
      <div class="content_footer">
        <div class="footer1 flex gap-5">
          <p class="text-2xl opacity-70">بیش از 80 دوره آموزشی</p>
          <p class="text-2xl opacity-70">ضمانت بازگشت وجه</p>
        </div>
        <div class="footer2 flex gap-5">
          <p class="text-2xl opacity-70">یادگیری با تمرین و آزمون</p>
          <p class="text-2xl opacity-70">پشتیبانی ۲۴ساعته</p>
        </div>
      </div>
    </div>
    <div class="logo w-full h-full overflow-hidden">
      <img class="image object-cover" src="@/assets/image/nice.jpg/" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.herosection_content {
  @apply flex max-w-full mt-52 mx-40 gap-24;
}
.content {
  @apply w-1/2 flex flex-col gap-9;
}
.content_footer {
  @apply flex flex-col  gap-11 mr-8 mt-4;
}
</style>
