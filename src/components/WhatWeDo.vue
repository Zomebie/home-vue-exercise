<template>
  <section id="what-we-do">
    <header>
      <img src="../assets/title_whatwedo.png" width="181" height="23" />
    </header>

    <div id="projects">
      <img src="../assets/img_do01.png" width="390" height="310" />
      <img src="../assets/img_do02.png" width="390" height="310" />
      <img src="../assets/img_do03.png" width="390" height="310" />
    </div>

    <div id="origin">
      <img src="../assets/img_origin01.png" width="590" height="400" />
      <img src="../assets/img_origin02.png" width="590" height="400" />
    </div>

    <div id="vision">
      <img src="../assets/img_vision01.png" width="590" height="400" />
      <img src="../assets/img_vision02.png" width="590" height="400" />
    </div>

    <div id="mission">
      <img id="mission-title" src="../assets/title_mission.value_.png" width="235" height="23" />
      <div>
        <img src="../assets/img_mission01.jpg" width="380" height="437" />
        <img src="../assets/img_mission02.jpg" width="380" height="437" />
        <img src="../assets/img_mission03.jpg" width="380" height="437" />
      </div>
    </div>

    <div id="values">
      <img src="../assets/img_values.jpg" width="100%" height="auto" />
    </div>

    <div id="eco-system">
      <img src="../assets/title_ecosystem-1.png" width="541" height="54" />
      <img src="../assets/img_eco-3.jpg" width="1090" height="410" />
      <img src="../assets/txt_eco-1.jpg" width="473" height="16" />
    </div>

    <div id="road-map">
      <img src="../assets/title_roadmap.png" width="541" height="64" />
      <div>
        <img src="../assets/img_roadmap01.jpg" width="590" height="360" />
        <img src="../assets/img_roadmap02-1.jpg" width="590" height="360" />
      </div>
    </div>

    <div id="partners">
      <img src="../assets/title_partners-1.png" width="541" height="56" />
      <div>
        <img src="../assets/img_partner1.jpg" width="380" height="90" />
        <img src="../assets/img_partner2-1.jpg" width="389" height="100" />
        <img src="../assets/img_partner3.jpg" width="380" height="100" />
      </div>
    </div>

    <div id="map-title">
      <img src="../assets/title_beintouch-1.jpg" width="171" height="23" />
    </div>

    <iframe
      id="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5323.193314215714!2d127.05144036130355!3d37.503444189831114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca415adc25371%3A0xb980b53ba08dc51c!2z7Jyk7LKc67mM65Sp!5e0!3m2!1sko!2skr!4v1550132222216"
      width="80%"
      height="550"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
#what-we-do,
#eco-system,
#road-map,
#partners,
#mission,
#map-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}

#projects {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fafaff;
}
#projects img {
  margin: 30px;
}
#origin {
  margin-top: 40px;
}
#origin,
#vision,
#partners div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#mission div {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#mission div > img {
  margin: 15px;
}

#eco-system img:last-child {
  margin-top: 30px;
}
#partners div > img {
  margin: 15px;
}
#google-map {
  margin: 30px;
}
@media screen and (max-width: 400px) {
  #google-map {
    height: 400px;
  }
}
</style>