import Vue from "vue";
import App from "./App.vue";
import vueHeadful from "vue-headful";
import router from "./router/vue-router";

Vue.component("vue-headful", vueHeadful);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
