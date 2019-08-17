<template>
  <section class="slides" :style="{backgroundImage:'url(' + slideImg + ')'}">
    <NewsBackgroundDotFilter></NewsBackgroundDotFilter>
    <NewsBackgroundBlueFilter></NewsBackgroundBlueFilter>
    <div id="news-box">
      <span id="type">{{source.type}}</span>
      <span id="link-box">
        <a id="link" :href="source.link">{{source.title}}</a>
      </span>
      <span id="additional-info">{{source.additionalInfo}}</span>
    </div>
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
  /* filter: contrast(1.2) saturate(1.35); */
  animation: fade 2s;
}

#news-box {
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 15%;
  top: 70%;
  left: 25%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
  font-family: Rajdhani;
}
#type {
  font-size: 0.8em;
  font-weight: 600;
  color: rgb(197, 164, 119);
  letter-spacing: 3px;
}
#link-box {
  width: 80%;
  text-align: center;
}
#link {
  font-size: 2.4em;
  color: rgb(45, 48, 50);
  text-decoration: none;
  cursor: pointer;
}
#link:hover {
  text-decoration-line: underline;
}
#additional-info {
  font-size: 1em;
  color: rgba(45, 48, 50, 0.75);
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>