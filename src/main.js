import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css";
import VueRouter from 'vue-router';
import routes from './routes';
import vuelidate from 'vuelidate'


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(vuelidate)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
