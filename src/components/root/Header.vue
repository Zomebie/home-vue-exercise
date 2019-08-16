<template>
  <header id="home-header">
    <div id="contents">
      <span id="logo">
        <img :src="logoUrl" alt="키인사이드" width="134" height="27" @click="linkToHome" />
      </span>

      <nav id="nav-bar">
        <ul>
          <router-link tag="li" v-for="list in lists" :key="list.id" :to="list.link">{{list.name}}</router-link>
        </ul>
      </nav>

      <nav id="alter-nav-bar" @click="showNavLists">
        <i class="fas fa-bars"></i>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      logoUrl:
        "http://www.key-inside.com/wp-content/uploads/sites/3/2019/03/Asset-1.png",
      lists: [
        {
          id: 1,
          name: "TEAM",
          link: "/team"
        },
        {
          id: 2,
          name: "BLOG",
          link: "/blog"
        },
        {
          id: 3,
          name: "CAREER",
          link: "/career"
        }
      ]
    };
  },
  methods: {
    linkToHome() {
      location.href = "http://www.key-inside.com/";
    },
    showNavLists() {}
  }
};
</script>
<style>
#home-header {
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 95px;
  background: transparent;
  border-bottom: 1px solid rgba(240, 240, 240, 0.2);
  display: flex;
  justify-content: center;
}
#contents {
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo img {
  cursor: pointer;
}
#nav-bar {
  font-size: 12px;
  color: white;
  font-family: "Rajdhani", Arial, sans-serif;
}
#nav-bar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 180px;
  display: flex;
  justify-content: space-between;
}
#nav-bar router-link {
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;
}
#nav-bar li {
  text-align: center;
  cursor: pointer;
  transition: all ease 0.3s;
}
#alter-nav-bar {
  display: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
}
/* responsive */
@media screen and (max-width: 1200px) {
  #contents {
    justify-content: space-around;
  }
}
@media screen and (max-width: 1000px) {
  #nav-bar {
    display: none;
  }
  #alter-nav-bar {
    display: flex;
  }
}
/* for animation */
#nav-bar li::before {
  position: absolute;
  top: 100%;
  left: 0;
  content: attr(data-hover);
  z-index: 1;
}
</style>