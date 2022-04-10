<template>
  <div class="herosection_content">
    <div class="content w-1/2">
      <h1 class="title text-5xl font-bold opacity-80">
        داستان برنامه‌نویس شدنت از اینجا شروع میشه!
      </h1>
      <p class="pharag opacity-50 text-2xl">
        یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست، تلاش و تمرین داشته باشید،
        بقیه‌اش با راکت
      </p>
      <span class="btn1">
        <router-link
          class="btn bg-blue-500 hover:bg-gray-400 transition-colors cursor-pointer text-center px-4 py-4 text-white rounded-lg w-2/4"
          to="/HeroSectionRedirect"
        >
          شروع یادگیری برنامه‌نویسی</router-link
        >
      </span>
      <div class="content_footer">
        <div class="footer1 flex gap-7">
          <p class="link text-2xl opacity-60">بیش از 80 دوره آموزشی</p>
          <p class="link text-2xl opacity-60">ضمانت بازگشت وجه</p>
        </div>
        <div class="footer2 flex gap-7">
          <p class="link text-2xl opacity-60">یادگیری با تمرین و آزمون</p>
          <p class="link text-2xl opacity-60">پشتیبانی ۲۴ساعته</p>
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
  margin-top: 13rem;
  display: flex;
  width: 84%;
  gap: 10rem;
  margin-right: 10%;
}
.content {
  @apply w-1/2 flex flex-col gap-9;
}
.content_footer {
  @apply flex flex-col   gap-11  mt-4;
}
.content_footer {
  width: 120%;
}
.title {
  width: 131%;
}
@media screen and (max-width: 1531px) {
  .content_footer {
    width: 150%;
  }
  .link {
    font-size: larger;
  }
  .btn {
    padding: 8px;
  }
}
@media screen and (max-width: 1291px) {
  .title {
    font-size: xx-large;
  }
}
@media screen and (max-width: 1200px) {
  .herosection_content {
    display: flex;
    width: 75%;
    flex-direction: column;
    gap: 2.25rem;
  }
  .image {
    width: 80%;
    text-align: center;
    margin-right: 100px;
  }
  .content {
    text-align: center;
    margin-right: 125px;
  }
  .content_footer {
    margin-right: 107px;
  }
  .pharag {
    text-align: justify;
  }
  .btn {
    margin-left: 200px;
  }
}
@media screen and (max-width: 1100px) {
  .pharag {
    font-size: small;
  }
  .footer2 {
    font-size: small;
  }
  .footer1 {
    font-size: small;
  }
}
@media screen and (max-width: 1020px) {
  .title {
    font-size: x-large;
    width: 155%;
  }
  .btn {
    margin-left: 80px;
    padding: 5px 5px;
  }
}
.content_footer {
  margin-right: 55px;
}

@media screen and (max-width: 1000px) {
  .title {
    font-size: x-large;
  }
  .pharag {
    font-size: small;
    margin-right: 20px;
  }
  .content {
    margin-right: 124px;
  }
  .btn {
    margin-left: 94px;
    padding: 3px 8px;
  }
  .image {
    width: 90%;
  }
  .content_footer {
    margin-right: 27px;
  }
}
@media screen and (max-width: 830px) {
  .image {
    width: 80%;
  }
}
@media screen and (max-width: 750px) {
  .herosection_content {
    flex-direction: column-reverse;
    width: 90%;
    margin-top: 50px;
    margin-right: 35px;
  }
  .content {
    margin-right: 86px;
  }
  .title {
    font-size: xx-large;
    font-weight: bold;
    width: 176%;
  }
  .pharag {
    font-size: larger;
    width: 150%;
  }
  .btn1 {
    width: 200%;
  }
  .footer1 {
    font-size: large;
  }
  .footer2 {
    font-size: large;
  }
}
</style>
