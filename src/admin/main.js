import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import {Validator} from "simple-vue-validator";
import store from "./store";
import $axios from "./requests";

Vue.use(Validator);

store .$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});
