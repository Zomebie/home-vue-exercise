<template>
  <section :key="source.id" class="slides" :style="{backgroundImage:'url(' + slideImg + ')'}">
    <NewsBackgroundDotFilter></NewsBackgroundDotFilter>
    <NewsBackgroundBlueFilter></NewsBackgroundBlueFilter>
  </section>
</template>
<script>
import NewsBackgroundDotFilter from "./NewsBackgroundDotFilter";
import NewsBackgroundBlueFilter from "./NewsBackgroundBlueFilter";
export default {
  components: {
    NewsBackgroundDotFilter,
    NewsBackgroundBlueFilter
  },
  props: {
    source: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    slideImg() {
      return this.source.img;
    }
  }
};
</script>
<style>
section.background-filter {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.slides {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  animation: fade 0.5s ease-in;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
}
</style>