<template>
  <div class="flex flex-col justify-center items-center">
    <div class="logo">
      <span class="cursor-pointer">
        <router-link to="/"> <Logo /> </router-link
      ></span>
    </div>
    <div class="form">
      <div class="login">
        <router-link class="btn2" to="/login">ورود</router-link>
        <button class="btn1">ثبت نام</button>
      </div>
      <div class="content">
        <h1 class="font-bold text-xl opacity-70">سلام رفیق</h1>
        <h6 class="opacity-50 text-sm pt-2">
          به خونه خوش اومدی! اگه عضو راکت هستی، وارد شو
        </h6>
      </div>

      <div class="links">
        <span class="link"> ورود با گوگل </span>
        <span class="link"> ورود با یاهو </span>
        <span class="link"> ورود با لینکدین </span>
        <span class="link"> ورود با لینکدین </span>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "./../components/Logo.vue";
export default {
  name: "Signin",
  components: {
    Logo,
  },
};
</script>
<style scoped>
.logo {
  @apply mx-40 mt-24;
}

.form {
  @apply bg-white mt-28  py-10 px-10 mx-40 flex flex-col justify-center items-center rounded-xl;
}
.form {
  width: 30%;
}

.login {
  @apply items-center justify-center flex  gap-2 mb-5;
}
.btn1 {
  @apply duration-200 rounded-lg text-blue-600 hover:bg-blue-500 w-28 px-3 py-3 hover:border-blue-600 transition hover:text-white font-bold text-opacity-70;
}
.btn2 {
  @apply px-3 w-28 rounded-lg font-bold text-white bg-blue-500 py-3 text-center;
}
.content {
  @apply mb-8 flex flex-col justify-center items-center;
}
.links {
  @apply bg-gray-100 mb-8 grid py-4 px-4 bg-opacity-20 rounded-lg;
}
.links {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.link {
  @apply bg-white px-4 py-4 w-32  rounded-lg border-transparent hover:bg-blue-100 transition-transform duration-200 delay-1000 cursor-pointer text-center;
}
</style>
