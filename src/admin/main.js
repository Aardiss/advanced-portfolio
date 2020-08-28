import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import babel from "@babel/plugin-transform-runtime";

Vue.use(VueSimpleValidator, { mode: 'manual' });

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});
