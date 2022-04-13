<template>
  <div class="flex flex-col justify-center text-center items-center">
    <div class="logo">
      <span class="cursor-pointer">
        <router-link to="/"> <Logo /> </router-link
      ></span>
    </div>
    <div class="form">
      <div class="login">
        <router-link class="btn1" to="/Signin">ثبت نام</router-link>
        <router-link class="btn2" to="/login">ورود</router-link>
      </div>
      <div class="content">
        <h1 class="font-bold text-xl opacity-70">ثبت نام در راکت</h1>
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

      <div class="input1 flex flex-col">
        <label class="label">ایمیل</label>
        <input
          @input="$v.email.$touch()"
          :class="{
            'is-invalid': $v.email.$error,
            'is-valid': !$v.email.$invalid,
          }"
          v-model.trim="$v.email.$model"
          dir="ltr"
          class="input mb-5 text-black"
          type="email"
        />
      </div>
      <div class="input1 mt-4 flex flex-col">
        <label class="label" for="">پسورد</label>
        <input
          @input="$v.password.$touch()"
          :class="{
            'is-invalid': $v.password.$error,
            'is-valid': !$v.password.$invalid,
          }"
          v-model.trim="$v.password.$model"
          class="input"
          :type="type"
        />
      </div>
      <button
        class="mt-4 bg-gray-400 text-white p-3 px-4 w-64 text-center bg-blue-500 cursor-pointer rounded-lg hover:text-white"
      >
        ورود
      </button>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import Logo from "../components/Logo.vue";
export default {
  name: "Login",
  components: {
    Logo,
  },
  data() {
    return {
      type: "password",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
};
</script>
<style scoped>
.logo {
  @apply mx-40 mt-24;
}

.form {
  @apply bg-white mt-16  py-10 px-10  flex flex-col justify-center items-center rounded-xl;
}
.form {
  width: 30%;
}

.login {
  @apply items-center justify-center flex  gap-2 mb-5;
}
.btn2 {
  @apply duration-200 rounded-lg text-blue-600 text-center hover:bg-blue-500 w-28 px-3 py-3 hover:border-blue-600 transition hover:text-white font-bold text-opacity-70;
}
.btn1 {
  @apply px-3 w-28 rounded-lg font-bold text-white bg-blue-500 py-3 text-center;
}
.content {
  @apply mb-8 flex flex-col justify-center items-center;
}
.links {
  @apply bg-gray-100 mb-8 grid py-4 px-4 bg-opacity-40 rounded-lg;
}
.links {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.link {
  @apply bg-white px-4 py-4 w-32  rounded-lg border-transparent hover:bg-blue-100 transition-transform duration-200 delay-1000 cursor-pointer text-center;
}
.input {
  @apply w-80 border-2 hover:border-blue-300 rounded-lg pt-4 px-3 focus:bg-white duration-300 outline-none transition-all;
}
.label {
  @apply font-normal text-gray-400 mb-1;
}
.is-invalid {
  @apply border-red-400;
}
.is-valid {
  @apply border-green-500 border-2;
}
</style>
