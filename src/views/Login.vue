<template>
  <div class="cont flex flex-col justify-center items-center">
    <div class="logo">
      <span class="cursor-pointer">
        <router-link to="/"> <Logo /> </router-link
      ></span>
    </div>
    <div class="form">
      <div class="login">
        <router-link class="btn1" to="/signin">ثبت نام</router-link>
        <button class="btn2">ورود</button>
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

      <div class="maicontent">
        <h3 class="h3 relative text-xs opacity-50 w-28 text-center">
          با ورود به حساب با
        </h3>
        <span></span>
      </div>
      <div class="input1 flex flex-col text-black">
        <label class="label" for="">نام</label>
        <input
          @input="$v.firstName.$touch()"
          :class="{
            'is-invalid': $v.firstName.$error,
            'is-valid': !$v.firstName.$invalid,
          }"
          class="input"
          type="text"
          v-model.trim="$v.firstName.$model"
        />
        <template v-if="$v.firstName.$error">
          <span v-if="!$v.firstName.required">لطفا نام خود را وارد کنید</span>
        </template>
      </div>
      <div class="input1 flex flex-col mt-3">
        <label class="label" for="">نام خانوادگی</label>
        <input
          @input="$v.lastName.$touch()"
          :class="{
            'is-invalid': $v.lastName.$error,
            'is-valid': !$v.lastName.$invalid,
          }"
          class="input"
          type="text"
          v-model.trim="$v.lastName.$model"
        />
      </div>
      <div class="input1 flex flex-col mt-3">
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
      <div class="input1 flex flex-col">
        <label class="label"> پسورد</label>
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
      <div>
        <button
          @click="submit"
          :disabled="$v.$invalid"
          class="mt-4 bg-gray-400 text-white p-3 px-4 w-64 text-center bg-blue-500 cursor-pointer rounded-lg hover:text-white"
        >
          ورود
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
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
    firstName: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(15),
    },
    lastName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: this.email,
          password: this.password,
          lastName: this.lastName,
          firstName: this.firstName,
        })
      );
      this.$router.push("/profail");
    },
  },
};
</script>
<style scoped>
.logo {
  @apply mx-40 mt-24;
}
.form {
  @apply bg-white mt-10  py-12 px-12  flex flex-col justify-center items-center rounded-xl;
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
  @apply mb-11 flex flex-col justify-center items-center;
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
.maicontent {
  @apply mb-4;
}
h3:before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: gray;
  position: absolute;
  top: 13px;
  left: 132px;
  opacity: 0.5;
}
h3:after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: gray;
  position: absolute;
  top: 13px;
  right: 132px;
  opacity: 0.5;
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
@media screen and (max-width: 670px) {
  .cont {
    margin-right: 110px;
  }
}
@media screen and (max-width: 520px) {
  .form {
    width: 100%;
  }
  .content {
    gap: 20px;
    margin-top: 10px;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .h3:before {
    content: "";
    width: 50%;
    height: 1px;
    background-color: gray;
    position: absolute;
    top: 13px;
    left: 132px;
    opacity: 0.5;
  }
  .h3:after {
    content: "";
    width: 54%;
    height: 1px;
    background-color: gray;
    position: absolute;
    top: 13px;
    right: 132px;
    opacity: 0.5;
  }
  .input1 {
    width: 100%;
  }
  .input {
    width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .cont {
    margin-right: 200px;
  }
  .form {
    width: 145%;
  }
}
@media screen and (max-width: 420px) {
  .cont {
    margin-right: 189px;
  }
  .form {
    width: 173%;
  }
}
</style>
