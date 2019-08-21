<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/root/Header";
import Footer from "./components/root/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Rajdhani", Arial, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

.background-filter {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>