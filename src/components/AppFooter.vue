<template>
  <div class="footer">
    <div class="headfooter">
      <Logo />
      <hr />
      <div class="virtual">
        <span class="icon">
          <HeadFooter_icon1 class="svg" />
        </span>
        <span class="icon">
          <HeadFooter_icon2 class="svg" />
        </span>
        <span class="icon">
          <HeadFooter_icon3 class="svg" />
        </span>
      </div>
    </div>
    <div class="footer_adderes">
      <div class="about">
        <h3 class="text-lg text-black font-bold pb-5 opacity-80">
          درباره راکت
        </h3>
        <p class="pharag pt-2 opacity-50">
          راکت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران است
          که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و دوره‌های
          آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن برنامه
          نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
        </p>
        <a
          class="link text-blue-500 transition-all cursor-pointer hover:text-black"
          href="##"
        >
          مشاهده اطلاعات مسیریادگیری
        </a>
      </div>
      <div class="footer_sections_site">
        <h3 class="text-lg text-black font-bold pb-5 opacity-80">
          بخش های سایت
        </h3>
        <ul class="flex flex-col gap-3 p-2">
          <a
            class="pharag hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >قوانین و مقررات</a
          >
          <a
            class="hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >مدرسان راکت</a
          >
          <router-link
            to="/list"
            class="pharag hover:text-black hover:opacity-90 opacity-50 transition-all"
            >درباره راکت</router-link
          >

          <a
            class="pharag3 hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >ارتباط با ما</a
          >
        </ul>
      </div>
      <div class="footer_contactUs flex flex-col gap-3">
        <h3 class="text-lg text-black font-bold pb-5 opacity-80">
          ارتباط با ما
        </h3>
        <p class="pharag opacity-50">ایمیل</p>
        <p class="pharag opacity-50">تلگرام</p>
        <p class="pharag opacity-50">شماره تماس</p>
      </div>
      <div class="footer-number pr-20">
        <h3></h3>
        <ul class="list-none flex flex-col gap-3">
          <a
            class="hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >info@roocket.ir</a
          >
          <a
            class="hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >roocket-support</a
          >
          <a
            class="hover:text-black hover:opacity-90 opacity-50 transition-all"
            href=""
            >01144422101</a
          >
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import HeadFooter_icon1 from "./HeadFooter_icon1.vue";
import HeadFooter_icon2 from "./HeadFooter_icon2.vue";
import HeadFooter_icon3 from "./HeadFooter_icon3.vue";
export default {
  name: "Footer",
  components: {
    Logo,
    HeadFooter_icon1,
    HeadFooter_icon2,
    HeadFooter_icon3,
  },
};
</script>
<style scoped>
.headfooter {
  @apply mx-40 mt-60 gap-56 flex justify-between items-center;
}
.virtual {
  @apply flex  gap-4 items-center;
}
.icon {
  @apply bg-blue-100  py-3 px-3 transition duration-100 cursor-pointer rounded-md hover:bg-blue-500;
}
.icon:hover svg {
  fill: white;
}
.footer_adderes {
  @apply mt-8 flex justify-between mx-40;
}
.about {
  @apply w-1/3;
}
.footer_sections_site {
  @apply w-64 text-center flex flex-col;
}
.footer_contactUs {
  @apply w-64 text-center;
}
.footer-number {
  @apply w-64 pl-12 flex flex-col pt-14;
}
@media screen and (max-width: 1531px) {
  .footer {
    width: 100%;
  }
}
@media screen and (max-width: 1401px) {
  .footer_adderes {
    margin-right: 3rem;
  }
  .footer {
    width: 107%;
  }
  .headfooter {
    margin-left: 12rem;
    margin-right: 3rem;
  }
}
@media screen and (max-width: 1291px) {
  .footer {
    width: 100%;
  }
}
@media screen and (max-width: 1280px) {
  .footer {
    width: 100%;
  }
  .headfooter {
    margin-left: 11rem;
    margin-right: 3rem;
  }
}
@media screen and (max-width: 1280px) {
  .footer {
    width: 110%;
  }
}
@media screen and (max-width: 1020px) {
  .footer_adderes {
    width: 100%;
  }
  .pharag {
    width: 100%;
  }
  .headfooter {
    margin-left: -5rem;
    margin-right: 3rem;
  }
}
@media screen and (max-width: 1100px) {
  .footer {
    width: 100%;
  }
  .pharag {
    font-size: small;
  }
}
@media screen and (max-width: 1000px) {
  .link {
    font-size: smaller;
  }
}
@media screen and (max-width: 900px) {
  .headfooter {
    margin-left: -1rem;
    margin-right: 1rem;
  }
}
@media screen and (max-width: 830px) {
  .footer_adderes {
    width: 80%;
  }
}
@media screen and (max-width: 750px) {
  .headfooter {
    margin-left: -1rem;
    margin-right: 7rem;
    gap: 7rem;
  }
  .footer_adderes {
    background-color: rgb(236 237 240);
    border: 1px solid;
    border-color: rgb(236 237 240);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 102px;
    border-radius: 10px;
  }
  .about {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
  }
  .footer_sections_site {
    margin-top: 45px;
    display: flex;
    gap: 0px;
  }
  .footer_contactUs {
    margin-top: 62px;
    display: flex;
    flex-direction: column;
    margin-right: -160px;
  }
  .footer-number {
    margin-top: -145px;
    margin-left: -154px;
  }
}
@media screen and (max-width: 500px) {
  .virtual {
    margin-left: 108px;
  }
  .footer_adderes {
    width: 81%;
  }
}
</style>
