<template>
  <article>
    <PageTitle title="Meet Our Team" titleId="meet-our-team"></PageTitle>

    <section id="members">
      <div>
        <div v-for="cMember in cMembers" :key="cMember" class="c-member-common">
          <img :src="getImgUrl(cMember)" width="590" height="400" />
          <img :src="getInfoImgUrl(cMember)" width="590" height="400" />
        </div>
      </div>

      <div class="member-common">
        <img
          v-for="member in members"
          :key="member"
          :src="getImgUrl(member)"
          width="380"
          height="320"
        />
      </div>
    </section>
  </article>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle
  },
  data() {
    return {
      cMembers: ["jaden", "rooney", "shawn"],
      members: [
        "sam",
        "brooks",
        "kate",
        "tommy",
        "jason",
        "eddie",
        "jello",
        "james",
        "mickey",
        "khei",
        "samuel",
        "bea"
      ]
    };
  },
  methods: {
    getImgUrl(member) {
      return `src/assets/team/${member}.png`;
    },
    getInfoImgUrl(member) {
      return `src/assets/team/${member}-info.png`;
    }
  }
};
</script>

<style>
#members {
  padding-top: 120px;
}

#members .c-member-common {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#members .c-member-common:nth-child(2) {
  margin: 35px 0;
}

#members .member-common {
  display: flex;
  max-width: 1200px;
  margin: 65px auto 155px auto;
  justify-content: center;
  flex-wrap: wrap;
}

#members .member-common > img {
  margin: auto auto 15px auto;
}
</style>