<template>
  <section id="contents-section">
    <div id="projects" class="home-contents-common">
      <img src="../assets/main/title_whatwedo.png" width="181" height="23" />
      <div class="home-contents-responsive">
        <img class="animated-image" src="../assets/main/img_do01.png" width="380" height="302" />
        <img class="animated-image" src="../assets/main/img_do02.png" width="370" height="294" />
        <img class="animated-image" src="../assets/main/img_do03.png" width="380" height="302" />
      </div>
    </div>

    <div id="origin" class="home-contents-responsive">
      <img src="../assets/main/img_origin01.png" width="590" height="400" />
      <img src="../assets/main/img_origin02.png" width="590" height="400" />
    </div>

    <div id="vision" class="home-contents-responsive">
      <img src="../assets/main/img_vision01.png" width="590" height="400" />
      <img src="../assets/main/img_vision02.png" width="590" height="400" />
    </div>

    <div id="mission" class="home-contents-common">
      <img src="../assets/main/title_mission.value_.png" width="235" height="23" />
      <div class="home-contents-responsive">
        <img src="../assets/main/img_mission01.jpg" width="380" height="437" />
        <img src="../assets/main/img_mission02.jpg" width="380" height="437" />
        <img src="../assets/main/img_mission03.jpg" width="380" height="437" />
      </div>
    </div>

    <div id="values" class="home-contents-responsive">
      <img src="../assets/main/img_values.jpg" width="1180" height="140" />
    </div>

    <div id="eco-system" class="home-contents-common">
      <img src="../assets/main/title_ecosystem-1.png" width="541" height="54" />
      <img src="../assets/main/img_eco-3.jpg" width="1090" height="410" />
      <img src="../assets/main/txt_eco-1.jpg" width="473" height="16" />
    </div>

    <div id="road-map" class="home-contents-common">
      <img src="../assets/main/title_roadmap.png" width="541" height="64" />
      <div class="home-contents-responsive">
        <img src="../assets/main/img_roadmap01.jpg" width="590" height="360" />
        <img src="../assets/main/img_roadmap02-1.jpg" width="590" height="360" />
      </div>
    </div>

    <div id="partners" class="home-contents-common">
      <img src="../assets/main/title_partners-1.png" width="541" height="56" />
      <div class="home-contents-responsive">
        <img src="../assets/main/img_partner1.jpg" width="380" height="90" />
        <img src="../assets/main/img_partner2-1.jpg" width="389" height="100" />
        <img src="../assets/main/img_partner3.jpg" width="380" height="100" />
      </div>
    </div>

    <div id="map" class="home-contents-common">
      <img src="../assets/main/title_beintouch-1.jpg" width="171" height="23" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5323.193314215714!2d127.05144036130355!3d37.503444189831114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca415adc25371%3A0xb980b53ba08dc51c!2z7Jyk7LKc67mM65Sp!5e0!3m2!1sko!2skr!4v1550132222216"
        width="1160"
        height="550"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const ioCallback = entries => {
      entries.forEach(({ intersectionRatio, target }) => {
        if (intersectionRatio > 0) {
          target.classList.add("observed");
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(ioCallback);

    const animatedImages = document.getElementsByClassName("animated-image");
    for (let item of animatedImages) {
      intersectionObserver.observe(item);
    }
  }
};
</script>

<style>
.home-contents-common {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-contents-responsive {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#projects {
  margin-top: 120px;
}

#projects div {
  width: 100%;
  margin-top: 20px;
  background-color: #fafaff;
}

#projects > div > .animated-image {
  box-shadow: 5px 15px 35px #032d5d50;
  margin: 35px 15px 57px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.5s linear;
}

#projects > div > .observed:first-child {
  animation: flying-from-left 1s forwards;
}

#projects > div > .observed:nth-child(2) {
  animation: flying-from-bottom 1s forwards;
}

#projects > div > .observed:last-child {
  animation: flying-from-right 1s forwards;
}

#origin {
  margin-top: 45px;
}

#origin img:first-child {
  margin-right: 10px;
}

#vision img:first-child {
  margin-right: -10px;
}

#mission {
  margin-top: 165px;
}

#mission div > img {
  margin: 40px 7.5px 66px;
}

#eco-system {
  margin-top: 155px;
}

#eco-system img:last-child {
  margin-top: 35px;
}

#road-map {
  margin-top: 200px;
}

#eco-system > img:nth-child(2),
#road-map > div {
  margin-top: 34px;
}

#partners {
  margin-top: 150px;
}

#partners > div {
  margin-top: 20px;
}

#partners div > img {
  margin: 13px 15px 0;
}

#map {
  margin-top: 189px;
}

#map > iframe {
  margin: 35px 0;
  padding: 5px;
  background-color: #f7f7f7;
}

/* animation */
@keyframes flying-from-left {
  0% {
    transform: translateX(-100%);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

@keyframes flying-from-bottom {
  0% {
    transform: translateY(100%);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

@keyframes flying-from-right {
  0% {
    transform: translateX(100%);
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
}

/* responsive */
@media screen and (max-width: 400px) {
  #map > iframe {
    width: 90%;
    height: 400px;
  }
}
</style>
