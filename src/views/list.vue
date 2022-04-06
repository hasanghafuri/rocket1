<template>
  <div>
    <div class="content mt-6 flex flex-wrap gap-28">
      <div v-for="(article, index) in articles" :key="index" class="card">
        <div></div>
        <span class="userid">userid:{{ article.id }} </span>
        <h1 class="title">{{ article.title }}</h1>
        <p class="body">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.getArticleById();
  },
  methods: {
    getArticleById() {
      axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
        this.articles = res.data.slice(90);
      });
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
</style>
