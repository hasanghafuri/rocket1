<template>
  <div>
    <div class="subtitle">
      <div class="flex items-center">
        <AppCoursesIcon class="icon" />
        <h1 class="h1 text-4xl opacity-80 font-extrabold">جدید ترین دوره ها</h1>
      </div>
      <p
        class="p opacity-50 text-lg hover:text-black cursor-pointer transition-opacity"
      >
        مشاهده همه دوره‌ها
      </p>
    </div>
    <div class="content">
      <div v-for="(card, index) in cards" :key="index" class="cards">
        <div class="head">
          <img
            class="w-4/4 rounded-lg transform transition duration-200 hover:scale-110"
            :src="card.image"
            alt=""
          />
        </div>
        <div class="maincontent py-3">
          <span id="main" class="text-blue-500 px-4 text-sm h-9">
            {{ card.maintitle }}
          </span>
          <h2 class="maintitle2">
            {{ card.maintitle2 }}
          </h2>
          <p class="text-sm opacity-50 pt-1">
            {{ card.maintitle3 }}
          </p>
        </div>
        <div class="maxcontent">
          <span
            class="bg-red-200 text-red-500 text-sm px-5 w-9 text-center rounded-sm"
          >
            {{ card.maxtitle }}
          </span>

          <p class="text-blue-500 text-lg font-bold">{{ card.maxtitle2 }}</p>
        </div>

        <div class="footercontent">
          <router-link
            :class="card.color"
            class="footer"
            :to="{ name: 'CardSinglePageRoute', params: { id: card.id } }"
          >
            <!-- :to="'/AppSection2-informations/' + card.id" -->
            {{ card.footer }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCoursesIcon from "./AppCoursesIcon.vue";
export default {
  name: "Courses",
  components: {
    AppCoursesIcon,
  },
  props: {
    cards: {
      type: Array,
      default: () => ({}),
    },
  },
};
</script>
<style scoped>
.subtitle {
  @apply mt-48 mx-40 flex justify-between items-center max-w-full;
}
.cards {
  @apply bg-white rounded-lg relative px-4 py-4;
}
.head {
  @apply w-full  overflow-hidden;
}
.content {
  @apply mt-6 mx-40 flex items-center   justify-between;
}
.maintitle2 {
  @apply opacity-80 font-bold pt-4 h-24 hover:text-blue-500 cursor-pointer transition-colors;
}
.maxcontent {
  @apply flex justify-between items-center mt-9;
}
.footer {
  @apply text-center py-3 text-xl h-10  font-bold cursor-pointer hover:text-black;
}
#main:before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgb(54, 125, 238);
  color: rgb(19, 122, 219);
  position: absolute;
  top: 175px;
  right: 15px;
}
.footercontent {
  @apply mt-4 border-t text-center h-12 py-4 transition-colors;
}
.cards {
  width: 23%;
}
@media screen and (max-width: 1601px) {
  #main:before {
    top: 169px;
  }
}
@media screen and (max-width: 1532px) {
  #main:before {
    top: 182px;
  }
  .content {
    flex-wrap: wrap;
    width: 70%;
    gap: 10px;
    justify-content: space-evenly;
    margin-top: 40px;
  }
  .cards {
    width: 34%;
  }
}
@media screen and (max-width: 1290px) {
  .cards {
    width: 44%;
  }
  #main:before {
    top: 226px;
  }
}
@media screen and (max-width: 1100px) {
  .h1 {
    font-size: x-large;
  }
  .cards {
    width: 45%;
  }
  .content {
    width: 80%;
  }
  #main:before {
    top: 215px;
  }
}
@media screen and (max-width: 1100px) {
  .subtitle {
    margin-left: 0px;
  }
}
@media screen and (max-width: 1000px) {
  #main:before {
    top: 167px;
  }
  .content {
    margin-right: 150px;
  }
}
@media screen and (max-width: 830px) {
  .h1 {
    font-size: large;
  }
  .p {
    font-size: smaller;
  }
  #main:before {
    top: 167px;
  }
}
@media screen and (max-width: 750px) {
  .h1 {
    font-size: x-large;
  }
  .p {
    font-size: large;
  }
  #main:before {
    top: 143px;
  }
}
@media screen and (max-width: 720px) {
  .cards {
    width: 87%;
  }
}
@media screen and (max-width: 500px) {
  .subtitle {
    margin-right: 7rem;
  }
  .h1 {
    font-size: larger;
  }
  .cards {
    width: 100%;
  }
  .content {
    margin-right: 120px;
    width: 76%;
  }
  #main:before {
    top: 212px;
  }
}
</style>
