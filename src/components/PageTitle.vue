 <template>
  <section :id="titleId" class="title-common">
    <div :id="titleId+'-background'" class="background-filter"></div>
    <div>
      <h1>{{title}}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "titleId"]
};
</script>

<style>
.background-filter {
  z-index: -1;
}

.title-common {
  position: relative;
  height: 352px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  background-position: center center;
  background-size: auto;
  background-attachment: scroll;
}

#meet-our-team {
  background-image: url("../assets/team/sub_img_team33.jpg");
}

#meet-our-team-background {
  background-color: rgba(0, 0, 0, 0.55);
}

#stay-tuned-with-us,
#join-with-us {
  background-image: url("../assets/career/sub_img_blog1.jpg");
}

#stay-tuned-with-us-background,
#join-with-us-background {
  background-color: rgba(0, 0, 0, 0.75);
}

.title-common > div:last-child {
  width: 1170px;
  padding-top: 45px;
  margin-right: auto;
  margin-left: auto;
}

.title-common > div:last-child > h1 {
  margin: 0;
  color: white;
  text-align: left;
  letter-spacing: -0.2px;
  font-size: 50px;
  font-weight: 600;
}

/* responsive */
@media screen and (max-width: 1200px) {
  .title-common div:last-child {
    width: 80%;
  }
}
</style>