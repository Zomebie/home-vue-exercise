<template>
  <section :key="source.id" :class="{'filter':(source.id===1),'slide':true}" id="slide-main">
    <div :style="{backgroundImage:'url(' + slideImage + ')'}" class="background-filter"></div>
    <div id="news-background-blue-filter" class="background-filter slide"></div>
    <div id="news-background-dot-filter" class="background-filter slide" v-if="source.id!==1"></div>
    <div id="main-slide-only-filter" class="background-filter slide" v-if="source.id===1"></div>

    <div id="news-box-dummy" class="news-box-animation"></div>
    <div id="news-box" class="news-box-animation">
      <span id="type">
        <span class="dummy"></span>
        {{source.type}}
      </span>

      <span id="link-box">
        <span class="dummy"></span>
        <a :href="source.link">{{source.title}}</a>
      </span>

      <span id="additional-info">
        <span class="dummy"></span>
        {{source.additionalInfo}}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },

  computed: {
    slideImage() {
      return `src/assets/main/slide_${this.source.id}.jpg`;
    }
  }
};
</script>

<style>
.slide {
  animation: background-image-fade 2s;
}

#slide-main {
  width: 100%;
  height: 100%;
}

#slide-main div:first-child {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

#news-background-blue-filter {
  background-color: rgba(0, 91, 171, 0.5);
}

#news-background-dot-filter {
  background-image: url("../assets/main/dot-background.png");
}

#main-slide-only-filter {
  filter: contrast(0.5) saturate(1);
  background: rgba(127, 187, 227, 0.2);
  mix-blend-mode: overlay;
}

.news-box-animation {
  position: absolute;
  width: 940px;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
}

#news-box {
  animation: delayed-box-fade 0.5s;
}

#news-box-dummy {
  background: rgba(255, 255, 255, 0.9);
  animation: box-fade 0.5s;
}

#type {
  position: relative;
  padding-top: 3px;
  font-size: 15px;
  font-weight: 600;
  color: rgb(197, 164, 119);
  letter-spacing: 3px;
}

#link-box {
  position: relative;
  margin-top: 11px;
  width: 80%;
  font-size: 45px;
  text-align: center;
}

#link-box > a {
  color: rgb(45, 48, 50);
  text-decoration: none;
  cursor: pointer;
}

#link-box > a:hover {
  text-decoration-line: underline;
}

#additional-info {
  position: relative;
  margin-top: 24px;
  margin-bottom: 6px;
  font-size: 16px;
  text-align: center;
  color: rgba(45, 48, 50, 0.75);
}

.dummy {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(45, 48, 50, 0);
  animation: text-fade 1s;
  animation-delay: 0.6s;
}

/* animation */
@keyframes background-image-fade {
  0% {
    background: rgb(14, 65, 121);
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
    z-index: 1;
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
    z-index: 1;
  }
}

/* responsive */
@media screen and (max-width: 1200px) {
  .news-box-animation {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  #news-box {
    top: 30%;
  }
  #news-box-dummy {
    top: 30%;
  }
  #link-box {
    font-size: 1.5em;
  }
}
</style>