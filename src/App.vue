<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  background-color: #f2f3f5;
  font-family: vazir !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  direction: rtl;
}

input {
  font: inherit;
}
.container {
  max-width: 1024px;
  margin: 0px 250px;
}
@media screen and (max-width: 1601px) {
  .container {
    margin: 0px 0px;
  }
}
@media screen and (max-width: 720px) {
  .container {
    margin: 0px -50px;
  }
}
@media screen and (max-width: 674px) {
  .container {
    margin: 0px -77px;
  }
}
@media screen and (max-width: 450px) {
  .container {
    margin: 0px -94px;
  }
}
</style>
