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
    </div>
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
#what-we-do {
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
  padding: 30px 0;
}

/* #projects div:first-child {
  display: flex;
  justify-content: space-between;
  width: 50%;
} */
#origin {
  margin-top: 40px;
}
#mission {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#mission-title {
  padding: 150px 0 40px 0;
}
#mission div:first-child {
  display: flex;
}
#values {
  margin-top: 50px;
}

#eco-system {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}
</style>