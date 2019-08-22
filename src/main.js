import Vue from "vue";
import App from "./App.vue";
import router from "./router/vue-router";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
