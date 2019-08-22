<template>
  <section id="news-section">
    <progress :value="progressValue"></progress>
    <!-- <div id="page-loading-icon"></div> -->
    <button id="prev-arrow" class="slide-button arrow" @click="prevSlide">
      <i class="fas fa-angle-left"></i>
    </button>

    <button id="next-arrow" class="slide-button arrow" @click="nextSlide">
      <i class="fas fa-angle-right"></i>
    </button>

    <ul id="slide-bottom-bar" class="slide-button">
      <li
        v-for="item in slideArray"
        :key="item.id"
        :id="item.id"
        :class="{'selected':(item.id===1)}"
        @click="slideBarClick(item.id)"
      ></li>
    </ul>

    <Slide :source="selectedSlide"></Slide>
  </section>
</template>

<script>
import Slide from "./Slide";

export default {
  components: {
    Slide
  },

  data() {
    return {
      slideArray: [
        {
          id: 1,
          type: "NEWS",
          title: "하이퍼레저 패브릭 기반 암호화폐가 온다",
          link: "https://www.coindeskkorea.com/hyperledgerfabrictoken/",
          additionalInfo: "coindeskkorea 2019.7.5"
        },
        {
          id: 2,
          type: "NEWS",
          title: "키인사이드, 포인트 호환을 통해서 블록체인 대중화 나선다",
          link: "http://www.thebchain.co.kr/news/articleView.html?idxno=3629",
          additionalInfo: "thebchain 2019.3.13"
        },
        {
          id: 3,
          type: "MEDIA",
          title: "블록체인 기반 여행 테마의 마일리지 통합 서비스 연내 구축",
          link:
            "https://www.coindeskkorea.com/야놀자-토큰이-여행산업을-뒤흔들-수-있다/",
          additionalInfo: "야놀자-두나무-키인사이드 '트레블 얼라이언스' 구성"
        },
        {
          id: 4,
          type: "NEWS",
          title: "키인사이드, 포인트 호환을 통해서 블록체인 대중화 나선다",
          link: "http://www.thebchain.co.kr/news/articleView.html?idxno=3629",
          additionalInfo: "thebchain 2019.3.13"
        }
      ],
      selectedSlide: {},
      progressValue: 0,
      timerId: null
    };
  },

  created() {
    this.selectedSlide = this.slideArray[0];
  },
  mounted() {
    const slide = document.getElementById("news-section");

    slide.addEventListener("mouseover", _ => {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
    });

    slide.addEventListener("mouseout", _ => {
      this.timerId = setInterval(_ => {
        if (this.progressValue >= 10) {
          this.nextSlide();
          this.progressValue = 0;
        } else {
          this.progressValue++;
        }
      }, 1000);
    });
  },

  methods: {
    prevSlide() {
      const selectedSlideId = this.selectedSlide.id;

      if (selectedSlideId > 1) {
        this.selectedSlide = this.slideArray[selectedSlideId - 2];
      } else {
        this.selectedSlide = this.slideArray[3];
      }

      // pass the changed slide id
      this.toggleClassName(this.selectedSlide.id);
    },

    nextSlide() {
      const selectedSlideId = this.selectedSlide.id;

      if (selectedSlideId < 4) {
        this.selectedSlide = this.slideArray[selectedSlideId];
      } else {
        this.selectedSlide = this.slideArray[0];
      }

      // pass the changed slide id
      this.toggleClassName(this.selectedSlide.id);
    },

    slideBarClick(itemId) {
      this.selectedSlide = this.slideArray[itemId - 1];
      this.toggleClassName(itemId);
    },

    toggleClassName(selectedSlideId) {
      const removeTarget = document.getElementsByClassName("selected");

      if (removeTarget.length > 0) {
        removeTarget[0].classList.remove("selected");
      }
      const target = document.getElementById(selectedSlideId);
      target.classList.toggle("selected");
    }
  }
};
</script>

<style>
#news-section {
  position: relative;
  height: 1000px;
  max-height: 1000px;
  overflow: hidden;
}

progress {
  position: absolute;
  top: 0;
  width: 0%;
  height: 5px;
  background: rgba(255, 255, 255, 0.15);
  /* animation: progressive 10s forwards; */
}

#page-loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  z-index: 2;
  background: white;
  box-shadow: 15px 15px 35px #032d5d50;
  display: none;
}

#news-section:hover .slide-button {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.5s linear;
}

.arrow {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s linear;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 25px;
}

#prev-arrow {
  transform: matrix(1, 0, 0, 1, 30, -20);
}

#next-arrow {
  transform: matrix(1, 0, 0, 1, -70, -20);
  left: 100%;
}

#slide-bottom-bar {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 255px;
  padding: 0;
  margin: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s linear;
  transform: matrix(1, 0, 0, 1, -127, -33);
  list-style: none;
}

#slide-bottom-bar li {
  width: 60px;
  height: 3px;
  background: rgba(45, 48, 50, 0.2);
  cursor: pointer;
}

#slide-bottom-bar li.selected {
  background: rgba(45, 48, 50, 0.65);
}

/* responsive */
@media screen and (max-width: 400px) {
  #news-section {
    height: 380px;
  }
}

@keyframes progressive {
  100% {
    width: 100%;
  }
}
</style>