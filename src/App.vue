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
  margin: 0px 150px;
}
</style>
