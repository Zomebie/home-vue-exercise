<template>
  <section :key="source.id" class="slides" :style="{backgroundImage:'url(' + slideImg + ')'}">
    <NewsBackgroundDotFilter></NewsBackgroundDotFilter>
    <NewsBackgroundBlueFilter></NewsBackgroundBlueFilter>
    <div id="news-box-dummy" :key="'dummy'+source.id"></div>
    <div id="news-box" :key="source.id">
      <span id="type" :key="source.id+source.type">
        {{source.type}}
        <span id="type-dummy" :key="'dummy'+source.id+source.type"></span>
      </span>

      <span id="link-box">
        <span id="link-dummy" :key="'dummy'+source.title"></span>
        <a id="link" :href="source.link" :key="source.title">{{source.title}}</a>
      </span>

      <span id="additional-info" :key="source.additionalInfo">
        <span id="additional-info-dummy" :key="'dummy'+source.additionalInfo"></span>
        {{source.additionalInfo}}
      </span>
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
  animation: background-image-fade 0.5s ease-in;
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
  animation: delayed-box-fade 0.5s;
}
#news-box-dummy {
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 15%;
  top: 70%;
  left: 25%;
  padding: 50px 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: Rajdhani;
  animation: box-fade 0.5s;
}
#type {
  position: relative;
  font-size: 0.8em;
  font-weight: 600;
  color: rgb(197, 164, 119);
  letter-spacing: 3px;
}

#link-box {
  width: 80%;
  text-align: center;
  position: relative;
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
  text-align: center;
  font-size: 1em;
  color: rgba(45, 48, 50, 0.75);
  position: relative;
}
#additional-info-dummy,
#link-dummy,
#type-dummy {
  background: rgba(45, 48, 50, 0);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: text-fade 1s;
  animation-delay: 0.6s;
}
/* responsive */
@media screen and (max-width: 400px) {
  #news-box {
    top: 50%;
  }
  #news-box-dummy {
    top: 50%;
  }
  #link {
    font-size: 1em;
  }
}
/* animation */
@keyframes background-image-fade {
  0% {
    opacity: 0;
  }
}

@keyframes box-fade {
  0% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
  100% {
    transform-origin: bottom;
  }
}
@keyframes delayed-box-fade {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform-origin: bottom;
  }
}
@keyframes text-fade {
  0% {
    background: #e0e0e0;
    transform: scaleX(0);
    transform-origin: left;
  }
  30% {
    transform: scaleX(1);
    transform-origin: left;
  }

  70% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    background: #e0e0e0;
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>