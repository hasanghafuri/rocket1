<template>
  <div class="full">
    <div @click="closedrop" v-show="showdrop" class="BackDrop"></div>
    <div class="AppHeader_search">
      <router-link to="/">
        <Logo class="Logo" />
      </router-link>
      <div class="AppHeader_SearchBox" :class="{ 'z-30': showdrop }">
        <input
          @click="showbackdrop"
          id="SearchBox_input"
          type="text"
          placeholder="؟دنبال چی میگردی"
        />
        <LogoSearch class="absolute w-4 top-3 left-3" />
      </div>
      <div class="AppHeader--Login">
        <router-link class="btn1" to="/login"> ورود</router-link>
        <router-link class="btn2" to="/signin">عضویت</router-link>
      </div>
      <div class="menu_hamber">
        <div class="ham">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="AppHeader_menu">
      <ul class="Menu_list">
        <li>صفحه اصلی</li>
        <li @click="openpopup2" class="arrow">
          <span>دوره های آموزشی</span>
          <span> <img src="@/assets/image/arrow.png/" alt="" /></span>
        </li>
        <li>پرسش و پاسخ ها</li>
        <li>مقالات</li>
        <li>راکت کست</li>
        <li @click="openpopupabout" class="arrow cursor-pointer">
          <span>لینک های مفید</span>
          <span>
            <img class="Menu_arrow2" src="@/assets/image/arrow.png/" alt=""
          /></span>
        </li>
      </ul>
    </div>
    <AppHeaderPopAboutUs :open="open" @closed="closedpop" />
    <AppHeaderPopupCourse :openpop="openpop" @closedpop2="closed" />
  </div>
</template>
<script>
import Logo from "./Logo.vue";
import LogoSearch from "./LogoSearch.vue";
import AppHeaderPopAboutUs from "./AppHeaderPopAboutUs.vue";
import AppHeaderPopupCourse from "./AppHeaderPopupCourse.vue";
export default {
  name: "AppHeader",
  components: {
    Logo,
    LogoSearch,
    AppHeaderPopAboutUs,
    AppHeaderPopupCourse,
  },
  data() {
    return {
      showdrop: false,
      open: false,
      openpop: false,
    };
  },

  methods: {
    closedrop() {
      this.showdrop = false;
    },
    showbackdrop() {
      this.showdrop = true;
    },
    openpopupabout() {
      this.open = !this.open;
    },
    closedpop() {
      this.open = false;
    },
    openpopup2() {
      this.openpop = !this.openpop;
    },
    closed() {
      this.openpop = false;
    },
  },
};
</script>
<style scoped>
.Logo {
  @apply mr-4;
}

.AppHeader_search {
  @apply flex justify-between w-full  bg-white mt-3 rounded-xl h-36 items-center px-5 py-5;
}
.AppHeader_SearchBox {
  @apply w-2/4 relative;
}

#SearchBox_input {
  @apply bg-gray-200 w-full rounded-lg h-10 text-center text-lg outline-none;
}

.AppHeader--Login {
  @apply w-1/5 flex justify-end ml-12;
}
.AppHeader--Login button {
  @apply text-center;
}
.btn1 {
  @apply bg-blue-100 text-blue-500 text-center px-3 py-2  w-20 outline-none rounded-bl-none rounded-tl-none rounded-tr-lg rounded-br-lg -ml-2 hover:bg-blue-400  hover:text-white cursor-pointer transition-colors;
}
.btn2 {
  @apply bg-blue-500 text-white text-center px-3 py-2 w-20 outline-none rounded-lg cursor-pointer hover:bg-opacity-70;
}
.AppHeader_menu {
  @apply bg-gray-300 py-5 px-6  w-11/12  h-20  rounded-br-xl rounded-bl-xl mr-16;
}
.Menu_list {
  @apply list-none flex items-center text-center justify-center gap-9 text-black opacity-80 transition-all;
}
.Menu_list li {
  @apply hover:opacity-70;
}
.arrow {
  @apply flex items-center cursor-pointer;
}
.BackDrop {
  @apply w-full h-full fixed transition-opacity top-0 left-0 right-0 bottom-0 bg-gray-700  backdrop-filter isolate  z-30 opacity-70;
}

.menu_hamber {
  display: none;
  position: absolute;
}
.menu_hamber .line {
  width: 40px;
  height: 8px;
  border-radius: 6px;
  background: orange;

  margin-bottom: 4px;
}
@media screen and (max-width: 1601px) {
  .AppHeader_search {
    width: 97%;
    margin: 0px 0px;
  }
  .AppHeader_menu {
    margin: 0px 34px;
  }
  .full {
    margin-right: 100px;
    margin-top: 50px;
  }
}
@media screen and (max-width: 1100px) {
  .Menu_list {
    font-size: small;
  }
}
@media screen and (max-width: 1020px) {
  .Logo {
    width: 150px;
  }
  .AppHeader_menu {
    margin: 0px 18px;
  }
  .Menu_list {
    gap: 20px;
  }
}
@media screen and (max-width: 1000px) {
  .Logo {
    width: 150px;
  }
  .AppHeader_SearchBox {
    width: 39%;
  }
  .AppHeader--Login {
    margin-left: 10px;
  }

  .Menu_list {
    gap: 1.25rem;
  }
  .AppHeader_menu {
    margin: 0px 16px;
  }
}
@media screen and (max-width: 750px) {
  .AppHeader_search {
    display: flex;
    width: 100%;
    gap: 5px;
    height: 8rem;
  }
  .Logo {
    width: 150px;
    margin-right: 150px;
  }
  .AppHeader_SearchBox {
    display: none;
  }
  .AppHeader_menu {
    width: 92%;
    margin: 0px 15px;
  }
  .menu_hamber {
    display: block;
  }
  .AppHeader_menu {
    display: none;
  }
}
</style>
