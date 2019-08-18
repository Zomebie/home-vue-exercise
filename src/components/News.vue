<template>
  <section id="news-section">
    <button id="prev" @click="prevSlide">
      <i class="fas fa-angle-left"></i>
    </button>
    <button id="next" @click="nextSlide">
      <i class="fas fa-angle-right"></i>
    </button>
    <Slide :source="source"></Slide>
    <NewsBox :source="source"></NewsBox>
  </section>
</template>
<script>
import Slide from "./Slide";
import NewsBox from "./NewsBox";

export default {
  components: {
    Slide,
    NewsBox
  },
  data() {
    return {
      slideArray: [
        {
          id: 1,
          img: "src/assets/img_main_coindesk-0716.jpg",
          type: "NEWS",
          title: "하이퍼레저 패브릭 기반 암호화폐가 온다",
          link: "https://www.coindeskkorea.com/hyperledgerfabrictoken/",
          additionalInfo: "coindeskkorea 2019.7.5"
        },
        {
          id: 2,
          img: "src/assets/img_main.jpg",
          type: "NEWS",
          title: "키인사이드, 포인트 호환을 통해서 블록체인 대중화 나선다",
          link: "http://www.thebchain.co.kr/news/articleView.html?idxno=3629",
          additionalInfo: "thebchain 2019.3.13"
        },
        {
          id: 3,
          img: "src/assets/img_main_coindesk.jpg",
          type: "MEDIA",
          title: "블록체인 기반 여행 테마의 마일리지 통합 서비스 연내 구축",
          link:
            "https://www.coindeskkorea.com/야놀자-토큰이-여행산업을-뒤흔들-수-있다/",
          additionalInfo: "야놀자-두나무-키인사이드 '트레블 얼라이언스' 구성"
        },
        {
          id: 4,
          img: "src/assets/rsz_image.png",
          type: "NEWS",
          title: "키인사이드, 포인트 호환을 통해서 블록체인 대중화 나선다",
          link: "http://www.thebchain.co.kr/news/articleView.html?idxno=3629",
          additionalInfo: "thebchain 2019.3.13"
        }
      ],
      source: {
        id: 1,
        img: "src/assets/img_main_coindesk-0716.jpg",
        type: "NEWS",
        title: "하이퍼레저 패브릭 기반 암호화폐가 온다",
        link: "https://www.coindeskkorea.com/hyperledgerfabrictoken/",
        additionalInfo: "coindeskkorea 2019.7.5"
      }
    };
  },
  methods: {
    prevSlide() {
      this.slideEvent(0, this.slideArray.length - 1, -1);
    },
    nextSlide() {
      this.slideEvent(this.slideArray.length - 1, 0, 1);
    },
    slideEvent(arg1, arg2, arg3) {
      if (this.source.id === this.slideArray[arg1].id) {
        this.source = this.slideArray[arg2];

        return;
      }
      let target = this.slideArray.find(item => {
        return this.source.id + arg3 === item.id;
      });

      this.source = target;
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
#news-section:hover #prev {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.5s linear;
}
#news-section:hover #next {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.5s linear;
}
#prev,
#next {
  z-index: 1;
  transition: visibility 0.5s, opacity 0.5s linear;
  opacity: 0;
  visibility: hidden;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  font-size: 25px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
}
#prev {
  left: 2%;
}
#next {
  right: 2%;
}

@media screen and (max-width: 400px) {
  #news-section {
    height: 380px;
  }
}
</style>