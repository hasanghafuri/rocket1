<template>
  <div>
    <div v-show="open" class="admin">
      <img
        @click="closesidbar"
        src="@/assets/image/close.png"
        alt=""
        class="left-2 top-2 absolute cursor-pointer"
      />
      <div
        class="top-7 right-9 w-72 rounded-lg bg-gray-300 h-1/2 flex flex-col mx-8 my-9 py-4 px-4"
      >
        <div class="flex justify-center items-center flex-col mt-5">
          <img src="@/assets/image/icon.png" alt="" class="object-cover" />
          <h3 class="p-2 opacity-40">پروفایل</h3>
        </div>
        <div class="mt-9 w-60">
          <p>نام: {{ user.firstName }}</p>
          <p>نام خانوادگی: {{ user.lastName }}</p>
          <p>ایمیل: {{ user.email }}</p>
          <p>پسورد: {{ user.password }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  props: {
    open: Boolean,
  },
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
    };
  },
  mounted() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users"));

    this.user = users.find((user) => user.password === currentUser.password);
  },
  methods: {
    closesidbar() {
      this.$emit("closesidbar", false);
    },
  },
};
</script>
<style scoped>
.admin {
  @apply transition-all duration-700 delay-300 fixed w-96 right-0 bg-gray-700 h-full mt-8;
}
</style>
