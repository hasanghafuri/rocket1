<template>
  <div>
    <div class="bbb relative">
      <div class="content">
        <h1 class="title">از گوشه و اطراف دنیای برنامه‌نویسی</h1>
        <p class="pharag opacity-40 pt-4 w-2/5">
          نوشتن کار جالبیه که از هزاران سال همراه ما بوده و کمک کرده تا همیشه به
          روز باشیم، ما در راکت فضای رو به شکلی آماده کردیم تا شما بتونید
          ایده‌ها و مطالب جالب حوزه برنامه‌نویسی رو در اختیار هزاران برنامه‌نویس
          عضو راکت قرار بدید.
        </p>
        <router-link class="btn" to="/CheckBox"> مشاهده همه مطالب </router-link>
      </div>
      <div class="box">
        <div
          class="cards"
          :class="card.margintop"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="images">
            <img class="image" :src="card.image" alt="" />
          </div>
          <h1 class="subtitle">
            {{ card.subtitle }}
          </h1>
          <div class="maicontent">
            <span class="maintitle"> {{ card.maintitle }} </span>
            <span class="maintitle2"> {{ card.maintitle2 }} </span>
          </div>
          <div class="footer">
            <div class="flex justify-between">
              <button class="btn1">
                <section5_icon1 />
              </button>
              <button class="btn2">
                <section5_icon2 />
              </button>
            </div>
            <span class="opacity-50">زمان مطاله:۱:۲۰:۴۰</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSection5",
  props: {
    cards: {
      type: Array,
      default: () => ({}),
    },
  },
};
</script>
<style scoped>
.content {
  @apply bg-gray-200  mx-40 mt-96 bg-opacity-50 rounded-xl py-16 px-16 flex flex-col justify-between;
}
.title {
  @apply text-3xl font-bold w-1/2;
}
.btn {
  @apply bg-blue-500 text-white hover:bg-black w-40 text-center mt-5 rounded-sm py-2 px-2 transition-colors cursor-pointer font-bold;
}
.box {
  display: grid;
  grid-template-columns: repeat(2, 350px);
  position: absolute;
  right: 650px;
  top: -250px;
  gap: 8px;
}
.cards {
  @apply bg-white py-4 px-4 rounded-lg;
}
.images {
  @apply h-44 overflow-hidden;
}
.image {
  @apply w-full h-full rounded-lg transform transition duration-200    hover:scale-110;
}
.subtitle {
  @apply text-lg font-bold pt-3 opacity-80 hover:opacity-30 cursor-pointer transition-colors;
}
.maicontent {
  @apply flex justify-between items-center;
}
.maintitle {
  @apply opacity-50 text-sm;
}
.maintitle2 {
  @apply hover:bg-blue-600 hover:text-white text-blue-500 bg-blue-50 px-1 py-1 cursor-pointer transition-colors text-sm rounded-sm text-center;
}
.btn1 {
  @apply bg-blue-100 py-2 px-2 rounded-sm hover:bg-blue-500 transition-colors hover:text-white ml-2;
}
.btn2 {
  @apply bg-gray-200 py-2 px-2 rounded-sm;
}
.footer {
  @apply flex justify-between items-center mt-3;
}
@media screen and (max-width: 1531px) {
  .box {
    display: grid;
    grid-template-columns: repeat(2, 280px);
    position: absolute;
    right: 650px;
    top: -250px;
    gap: 8px;
  }
  .content {
    margin: 30% 3%;
  }
}
@media screen and (max-width: 1531px) {
  .box {
    display: grid;
    grid-template-columns: repeat(2, 255px);
    position: absolute;
    right: 532px;
    top: -250px;
    gap: 8px;
  }
  .content {
    width: 87%;
  }
  .bbb {
    margin-right: 68px;
  }
}
@media screen and (max-width: 1200px) {
  .box {
    grid-template-columns: 1fr 1fr;
    position: static;
    gap: 32px;
  }
  .content {
    margin: 32px auto;
  }

  .cards {
    margin-bottom: 0;
    margin-top: 0;
    max-width: 100%;
  }
}
@media screen and (max-width: 1020px) {
  .content {
    margin-top: 140px;
    padding: 20px 20px;
  }
  .pharag {
    width: 100%;
  }
  .btn {
    padding: 5px 0px;
  }
}
@media screen and (max-width: 1100px) {
  .subtitle {
    font-size: smaller;
  }
  .title {
    font-size: larger;
  }
  .pharag {
    font-size: smaller;
  }
}
@media screen and (max-width: 1000px) {
  .content {
    width: 80%;
  }
  .cards {
    max-width: 90%;
  }
  .box {
    gap: 17px;
    margin-right: 88px;
  }
}
@media screen and (max-width: 750px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-right: 40px;
  }
  .title {
    font-size: x-large;
    width: 62%;
  }
  .pharag {
    font-size: medium;
  }
  .box {
    width: 100%;
    margin-right: 60px;
  }
}

@media screen and (max-width: 640px) {
  .box {
    grid-template-columns: 1fr;
  }
}
</style>
