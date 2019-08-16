<template>
  <section id="news-section">
    <NewsBackgroundDotFilter></NewsBackgroundDotFilter>
    <NewsBackgroundBlueFilter></NewsBackgroundBlueFilter>
    <NewsTitle></NewsTitle>
  </section>
</template>
<script>
import NewsBackgroundDotFilter from "./NewsBackgroundDotFilter";
import NewsBackgroundBlueFilter from "./NewsBackgroundBlueFilter";
import NewsTitle from "./NewsTitle";

export default {
  components: {
    NewsBackgroundDotFilter,
    NewsBackgroundBlueFilter,
    NewsTitle
  }
};
</script>
<style>
#news-section {
  background: yellowgreen;
  /* background-image: url("http://www.key-inside.com/wp-content/uploads/sites/3/2019/03/img_main.jpg");
  background-repeat: no-repeat; */
  transition: none 0s ease 0s;
  height: 1000px;
}
section.background-filter {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  transition: none 0s ease 0s;
}

@media screen and (max-width: 400px) {
  #news-section {
    height: 380px;
  }
}
</style>