<template>
  <div>
    <div
      @click="opensidbar"
      v-if="show"
      class="parent flex gap-2 flex-col mr-0"
    >
      <span class="menu"></span>
      <span class="menu"></span>
      <span class="menu"></span>
    </div>
    <UserProfail :open="open" @closesidbar="close" />
  </div>
</template>

<script>
import UserProfail from "../components/UserProfail.vue";
export default {
  name: "profail",
  components: {
    UserProfail,
  },
  data() {
    return {
      open: false,
      notshow: true,
      show: true,
    };
  },
  methods: {
    opensidbar() {
      this.open = true;
      this.show = false;
    },
    close(isopen) {
      this.open = isopen;
      this.show = true;
    },
  },
};
</script>
<style scoped>
.menu {
  @apply w-10 h-1 bg-black;
}
.parent {
  position: absolute;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 40px;
}
.parent:hover {
  transform: rotate(90deg);
}
</style>
