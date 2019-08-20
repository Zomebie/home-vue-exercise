<template>
  <article>
    <PageTitle title="Meet Our Team" titleId="meet-our-team"></PageTitle>

    <section id="members">
      <div class="c-level-common">
        <img src="../assets/team/jaden.png" width="590" height="400" />
        <img src="../assets/team/jaden-info.png" width="590" height="400" />
      </div>

      <div class="c-level-common">
        <img src="../assets/team/rooney.png" width="590" height="400" />
        <img src="../assets/team/rooney-info.png" width="590" height="400" />
      </div>

      <div class="c-level-common">
        <img src="../assets/team/shawn.png" width="590" height="400" />
        <img src="../assets/team/shawn-info.png" width="590" height="400" />
      </div>

      <div class="team-common">
        <img src="../assets/team/sam.png" width="380" height="320" />
        <img src="../assets/team/brooks.png" width="380" height="320" />
        <img src="../assets/team/kate.png" width="380" height="320" />
      </div>

      <div class="team-common">
        <img src="../assets/team/tommy.png" width="380" height="320" />
        <img src="../assets/team/jason.png" width="380" height="320" />
        <img src="../assets/team/eddie.png" width="380" height="320" />
      </div>

      <div class="team-common">
        <img src="../assets/team/jello.png" width="380" height="320" />
        <img src="../assets/team/james.png" width="380" height="320" />
        <img src="../assets/team/mickey.png" width="380" height="320" />
      </div>

      <div class="team-common">
        <img src="../assets/team/khai.png" width="380" height="320" />
        <img src="../assets/team/samuel.png" width="380" height="320" />
        <img src="../assets/team/bea.png" width="380" height="320" />
      </div>
    </section>
  </article>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle
  }
};
</script>

<style>
#members {
  padding-top: 120px;
}

#members .c-level-common {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#members .c-level-common:nth-child(2) {
  margin: 35px 0;
}

#members .c-level-common:nth-child(3) {
  margin-bottom: 65px;
}

#members .team-common {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

#members .team-common > img:nth-child(2) {
  margin: 0px 20px;
}

#members div:last-child {
  margin-bottom: 155px;
}
</style>