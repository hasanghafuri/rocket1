<template>
  <div v-if="loading" class="lds-dual-ring"></div>
  <div v-else class="container flex flex-wrap gap-2">
    <div
      v-for="(article, index) in slicedarticle"
      :key="'ar' + index"
      class="card"
    >
      <span class="userid">userid:{{ article.id }} </span>
      <h1 class="title">{{ article.title }}</h1>
      <p class="body">{{ article.body }}</p>
    </div>
    <button
      class="mx-4 p-4 m-auto border-2 rounded-xl border-blue-600"
      v-for="pageNum in pageCount"
      :key="pageNum"
      @click="pagenext(pageNum)"
    >
      {{ pageNum }}
    </button>

    <div v-if="show" @click="backtohome">back home</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CardSingle",
  data() {
    return {
      article: [],
      loading: false,
      show: false,
      pageNum: 0,
      itempage: 10,
    };
  },

  mounted() {
    this.getArticleById();
  },

  methods: {
    getArticleById() {
      this.loading = true;

      axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
        // console.log(res);
        this.article = res.data;
        this.loading = false;
      });
    },
    backtohome() {
      this.$router.back();
    },
    pagenext(pageNum) {
      this.pageNum = pageNum - 1;
    },
  },
  watch: {
    loading(newval) {
      if (!newval)
        setTimeout(() => {
          this.show = true;
        }, 3000);
    },
  },
  computed: {
    pageCount() {
      return Math.round(this.article.length / this.itempage);
    },
    slicedarticle() {
      return this.article.slice(
        this.pageNum * this.itempage,
        (this.pageNum + 1) * this.itempage
      );
    },
  },
};
</script>
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fdd;
  border-color: #fdd transparent #fdd transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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
