<template>
  <div>
    <div class="subtitle">
      <div class="flex items-center">
        <AppCoursesIcon class="icon" />
        <h1 class="h1 text-4xl opacity-80 font-extrabold">مسیر های یادگیری</h1>
      </div>
      <p
        class="p opacity-50 text-lg hover:text-black cursor-pointer transition-opacity"
      >
        مشاهده همه مسیرهای یادگیری
      </p>
    </div>
    <div class="content">
      <div v-for="(card, index) in cards" :key="index" class="cards">
        <div class="title">
          <span v-color="card.bg" class="title1">
            {{ card.title1 }}
          </span>
          <div class="title2">
            <span class="text-center pt-1"><AppSection3_icon /></span>
            <span class="course"> {{ card.course }} </span>
          </div>
        </div>
        <h3 class="subject">{{ card.subject }}</h3>
        <p class="mainsubject">{{ card.mainsubject }}</p>

        <div class="headfooter">
          <span class="footer">
            {{ card.footer }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppCoursesIcon from "./AppCoursesIcon.vue";
export default {
  name: "AppLearning",
  components: {
    AppCoursesIcon,
  },
  props: {
    cards: {
      type: Array,
      default: () => ({}),
    },
  },

  directives: {
    color: {
      bind(el, binding) {
        el.classList.add(binding.value);
      },
    },
  },
};
</script>
<style scoped>
.subtitle {
  @apply mt-40 mx-40 flex justify-between items-center max-w-full;
}
.content {
  @apply mx-40 mt-6 flex justify-between;
}
.cards {
  @apply border-gray-300 border border-opacity-50  rounded-lg  hover:bg-white transition-colors py-7 px-7;
}
.cards {
  width: 32%;
}
.title {
  @apply flex justify-between items-center;
}
.title1 {
  @apply text-center w-16  py-4 px-4 text-lg font-bold rounded-md shadow-lg;
}
.title2 {
  @apply flex  items-center h-7 border border-gray-200 rounded-sm text-center;
}
.course {
  @apply text-xs text-center px-2;
}
.subject {
  @apply text-2xl font-bold text-black hover:text-blue-500 cursor-pointer h-7 mt-3 py-4 opacity-80;
}
.mainsubject {
  @apply opacity-40 h-28 mt-6 py-2;
}
.headfooter {
  @apply border-t w-full text-center pt-4 h-6;
}
.footer {
  @apply text-blue-500 opacity-80 hover:text-black transition-colors font-bold cursor-pointer py-5  w-full;
}
@media screen and (max-width: 1290px) {
}
@media screen and (max-width: 1290px) {
  .cards {
    width: 40%;
  }
}
@media screen and (max-width: 1200px) {
  .cards {
    width: 94%;
  }
}
@media screen and (max-width: 1100px) {
  .h1 {
    font-size: x-large;
  }
}
@media screen and (max-width: 1020px) {
  .cards {
    width: 100%;
  }
  .content {
    width: 70%;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .subtitle {
    margin-left: 0rem;
  }
}

@media screen and (max-width: 1000px) {
  .subtitle {
    margin-left: 0px;
    margin-right: 9rem;
  }
  .content {
    flex-direction: column;
    gap: 11px;
    align-items: center;
    margin-top: 50px;
    width: 60%;
  }
  .cards {
    width: 100%;
  }
}
@media screen and (max-width: 1000px) {
  .h1 {
    font-size: larger;
  }
  .p {
    font-size: smaller;
  }
  .content {
    margin-right: 210px;
  }
}
@media screen and (max-width: 750px) {
  .h1 {
    font-size: x-large;
  }
  .p {
    font-size: medium;
  }
}
</style>
