<template>
  <di class="w-full">
    <AppHeader />
    <div class="content mt-6 flex flex-wrap gap-28">
      <div v-for="(article, index) in pagedArticels" :key="index" class="card">
        <div>
          <img :src="article.img" alt="" />
        </div>
        <span class="userid">userid:{{ article.id }} </span>
        <h1 class="title">{{ article.title }}</h1>
        <p class="body">{{ article.body }}</p>
      </div>
    </div>
    <div class="numb">
      <button
        v-for="pageNumber in pagesCount"
        :key="pageNumber"
        class="mt-2 mx-1 p-4 m-auto border-2 rounded-xl border-blue-600"
        @click="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </button>
    </div>

    <AppFooter />
  </di>
</template>
<script>
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";
export default {
  name: "HeroSectionRedirect",
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      articles: [],
      pageNumber: 0,
      itemPerPage: 10,
    };
  },
  methods: {
    getArticleById() {
      axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
        console.log(res);
        this.articles = res.data.map((item) => {
          item.img =
            "https://static.roocket.ir/images/cover/2022/2/15/IKp1EZbte9k2VenO0JRA3UjmBty0A9T7ZoTjsCKh.jpg";
          return item;
        });
      });
    },
    paginate(pageNumber) {
      this.pageNumber = pageNumber - 1;
    },
  },
  mounted() {
    this.getArticleById();
  },
  computed: {
    pagesCount() {
      return Math.round(this.articles.length / this.itemPerPage);
    },

    pagedArticels() {
      return this.articles.slice(
        this.pageNumber * this.itemPerPage,
        (this.pageNumber + 1) * this.itemPerPage
      );
    },
  },
};
</script>
<style scoped>
.card {
  @apply bg-gray-200  rounded-lg py-6 px-6 w-1/4 flex flex-col items-center  gap-2;
}
.userid {
  @apply bg-gray-100 py-2 px-2 text-center w-60;
}
.title {
  @apply bg-gray-100 py-3 px-3 mt-2 rounded-lg;
}
.body {
  @apply bg-gray-300 py-3 px-3 rounded-md mt-4;
}
.numb {
  margin-right: 30%;
}
</style>
