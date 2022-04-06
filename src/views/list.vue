<template>
  <div>
    <div class="content mt-6 flex flex-wrap gap-28">
      <div
        @click="sendArticleData(article)"
        v-for="(article, index) in articles"
        :key="index"
        class="card"
      >
        <div></div>
        <span class="userid">userid:{{ article.id }} </span>
        <h1 class="title">{{ article.title }}</h1>
        <p class="body">{{ article.body }}</p>
      </div>
    </div>
    <Modal
      :selctedarticle="selctedarticle"
      :show="show"
      @offpop="offpop"
      :showback="showback"
    />
  </div>
</template>
<script>
import axios from "axios";
import Modal from "@/views/Modal.vue";
export default {
  name: "list",
  components: {
    Modal,
  },
  data() {
    return {
      articles: [],
      selctedarticle: {},
      show: false,
      showback: false,
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
    sendArticleData(article) {
      this.selctedarticle = article;
      this.show = true;
      this.showback = true;
    },
    offpop() {
      this.show = false;
      this.showback = false;
    },
  },
};
</script>
<style scoped>
.card {
  @apply bg-gray-200 z-0  rounded-lg py-6 px-6 w-1/4 flex flex-col items-center  gap-2;
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
