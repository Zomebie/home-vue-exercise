<template>
  <div id="app">
    <Header></Header>
    <Article></Article>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/root/Header";
import Article from "./components/root/Article";
import Footer from "./components/root/Footer";

export default {
  components: {
    Header,
    Article,
    Footer
  }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
}
</style>