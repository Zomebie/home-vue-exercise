<template>
  <header>
    <div id="header-contents">
      <img
        src="../../assets/main/header-logo.png"
        alt="키인사이드"
        width="134"
        height="27"
        @click="linkToHome"
      />

      <nav id="nav-bar">
        <ul>
          <router-link tag="li" v-for="list in lists" :key="list.id" :to="list.link">
            <span :data-hover="list.name">{{list.name}}</span>
          </router-link>
        </ul>
      </nav>

      <nav id="alter-nav-bar" @click="showNavLists">
        <i class="fas fa-bars"></i>
      </nav>
    </div>
  </header>
</template>

<script>
window.addEventListener("scroll", _ => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    return;
  }
  header.style.backgroundColor = "transparent";
});

window.addEventListener("load", _ => {
  const lists = document.querySelectorAll("#nav-bar ul li");

  for (let item of lists) {
    item.addEventListener("mouseover", ({ currentTarget }) => {
      currentTarget.style.transform = "translateY(-100%)";
    });

    item.addEventListener("mouseout", ({ currentTarget }) => {
      currentTarget.style.transform = "translateY(0%)";
    });
  }
});

export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "TEAM",
          link: "/meet-our-team"
        },
        {
          id: 2,
          name: "BLOG",
          link: "/category/blog"
        },
        {
          id: 3,
          name: "CAREER",
          link: "/join-with-us-2"
        }
      ]
    };
  },

  methods: {
    linkToHome() {
      location.href = "/";
    },
    showNavLists() {}
  }
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 93px;
  z-index: 2;
  display: flex;
  justify-content: center;
  background: transparent;
  border-bottom: 1px solid rgba(240, 240, 240, 0.2);
  transition: 0.3s ease-in-out;
}

#header-contents {
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header-contents > img {
  cursor: pointer;
}

#nav-bar > ul {
  margin: 0;
  padding: 0 7px 0 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  overflow: hidden;
}

#nav-bar > ul > li {
  position: relative;
  font-size: 12px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.15px;
  transition: all ease 0.3s;
  cursor: pointer;
}

#nav-bar > ul > li > span {
  padding: 36px 25px;
}

#nav-bar > ul > li > span:before {
  position: absolute;
  top: 100%;
  z-index: 1;
  content: attr(data-hover);
}

/* #nav-bar > ul > li > .menu-separator {
  display: none;
  position: absolute;
  bottom: -1px;
  left: 50%;
  width: 100%;
  height: 4px;
  content: "";
  background-color: #1e73be;
}

.router-link-exact-active {
} */

#nav-bar > ul > li:hover {
  animation: change-color 1s forwards;
}

#alter-nav-bar {
  display: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
}

/* responsive */
@media screen and (max-width: 1200px) {
  #header-contents {
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
/* animation */
/* @keyframes rotate {
  100% {
    transform: translateY(-100%);
  }
}

@keyframes back-rotate {
  100% {
    transform: translateY(0%);
  }
} */

@keyframes change-color {
  100% {
    color: #1e73be;
  }
}
</style>