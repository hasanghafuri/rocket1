<template>
  <div>
    <div class="content relative">
      <div class="subject">
        <div class="title">
          <AppCourseIcon class="icon" />
          <h1 class="h1 text-4xl font-extrabold opacity-90">
            در مورد راکت چه میشنویم؟
          </h1>
        </div>
        <p class="subtitle">
          این‌ها، بخش خیلی کوچکی از نظراتی هستند که افراد مختلف در مورد راکت
          دارند.
        </p>
      </div>
      <div class="card">
        <p class="pharag text-lg opacity-50 pt-10">
          برنامه‌نویسی کارخانه‌ی تبدیل ایده به واقعیت است که با کمک آموزش‌های
          جذاب و کاربردی راکت، میتوانید مالک این کارخانه باشید
        </p>
        <span class="pt-12 font-bold text-lg flex justify-center gap-1">
          <img
            class="w-12 h-12 rounded-full object-cover"
            src="@/assets/image/7024.jpg/"
            alt=""
          />
          حسن غفوری
        </span>
        <p class="text-sm opacity-30">developer</p>
      </div>
    </div>
  </div>
</template>
<script>
import AppCourseIcon from "./AppCoursesIcon.vue";
export default {
  name: "Comment",
  components: {
    AppCourseIcon,
  },
};
</script>
<style scoped>
.content {
  @apply mx-40 mt-40 flex justify-between;
}
.subject {
  @apply w-1/2;
}
.title {
  @apply flex;
}
.subtitle {
  @apply text-center text-lg opacity-50;
}
.card {
  @apply w-1/2 bg-white py-20 px-10 text-center rounded-xl -mt-16;
}
@media screen and (max-width: 1100px) {
  .h1 {
    font-size: x-large;
    font-weight: 600;
  }
  .subtitle {
    text-align: center;
    width: 167%;
  }
  .card {
    margin-top: 0rem;
    width: 100%;
  }
  .content {
    flex-direction: column;
  }
}

@media screen and (max-width: 1020px) {
  .subject {
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .subject {
    width: 60%;
  }
}

.icon {
  width: 30;
}
.subtitle {
  width: 160%;
  font-size: smaller;
}
.card {
  padding: 10px 11px;
  width: 100%;
}
.pharag {
  font-size: smaller;
}
.title {
  width: 130%;
}
@media screen and (max-width: 750px) {
  .title {
    width: 160%;
    font-size: x-large;
  }
  .subtitle {
    width: 224%;
    font-size: large;
  }
  .card {
    width: 150%;
    padding: 0px 20px;
  }
  .pharag {
    font-size: medium;
  }
}
@media screen and (max-width: 500px) {
  .title {
    width: 220%;
    margin-bottom: 16px;
    margin-right: 19px;
  }
  .content {
    width: 50%;
    margin-right: 7rem;
  }
  .card {
    width: 155%;
    margin-top: 20px;
  }
}
</style>
