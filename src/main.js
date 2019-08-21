import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/vue-router";
// import VueProgressBar from "vue-progressbar";

// Vue.use(VueProgressBar);

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
