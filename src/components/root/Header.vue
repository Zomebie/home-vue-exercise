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
            <span class="menu-wrapper">
              <span class="text-wrapper">
                <span class="text" :data-hover="list.name">{{list.name}}</span>
              </span>
              <span class="menu-seperator"></span>
            </span>
          </router-link>
        </ul>
      </nav>

      <button id="alter-nav-bar-button" @click="toggleAlterNav">
        <i class="fas fa-bars" v-if="!alterNavFlag"></i>
        <i class="fas fa-times" v-else></i>
      </button>

      <nav id="alter-nav-bar" :class="[alterNavFlag?'open':'']">
        <ul>
          <router-link
            tag="li"
            v-for="list in lists"
            :key="list.id"
            :to="list.link"
            @click.native="toggleAlterNav"
          >
            <span>{{list.name}}</span>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
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
      ],
      alterNavFlag: false
    };
  },

  methods: {
    linkToHome() {
      location.href = "/";
    },
    toggleAlterNav() {
      this.alterNavFlag = !this.alterNavFlag;
    }
  },

  mounted() {
    window.addEventListener("scroll", _ => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        return;
      }
      header.style.backgroundColor = "transparent";
    });
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
  position: relative;
  width: 1170px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header-contents > img {
  padding-bottom: 4px;
  cursor: pointer;
}

#nav-bar > ul {
  margin: 0;
  padding: 0 11px 0 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

#nav-bar > ul > li {
  position: relative;
  font-size: 12px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.15px;
  cursor: pointer;
}

#nav-bar > ul > li > .menu-wrapper {
  padding: 36px 25px;
  display: inline-block;
}

#nav-bar > ul > li > .menu-wrapper > .text-wrapper {
  display: block;
  overflow: hidden;
}

#nav-bar > ul > li > .menu-wrapper > .text-wrapper > .text {
  position: relative;
  display: inline-block;
  transition: transform ease 0.3s;
}

#nav-bar > ul > li > .menu-wrapper > .text-wrapper > .text:before {
  position: absolute;
  top: 100%;
  z-index: 1;
  content: attr(data-hover);
}

#nav-bar > ul > li > .menu-wrapper > .menu-seperator {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 100%;
  height: 4px;
  display: none;
  background-color: #1e73be;
  transform: translateX(-50%);
}

#nav-bar > ul > li:hover .text {
  transform: translateY(-100%);
  animation: change-color 0.4s forwards;
}

#nav-bar > ul > .router-link-exact-active {
  color: #1e73be;
}

#nav-bar > ul > .router-link-exact-active > .menu-wrapper > .menu-seperator {
  display: flex;
}

#alter-nav-bar-button {
  display: none;
  border: none;
  font-size: 18px;
  color: #333;
  background: none;
  cursor: pointer;
  outline: none;
}

#alter-nav-bar {
  position: absolute;
  top: 94px;
  width: 100%;
  background: #161616;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 1s, opacity 1s;
}

#alter-nav-bar.open {
  transform: scaleY(1);
  transform-origin: top;
  opacity: 1;
}

#alter-nav-bar > ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

#alter-nav-bar > ul > li {
  padding: 14px 0 14px 20px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* responsive */
@media screen and (max-width: 992px) {
  #nav-bar {
    display: none;
  }
  #alter-nav-bar-button {
    display: flex;
  }
}

@media screen and (max-width: 1200px) {
  header #header-contents {
    width: 90%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

/* animation */
@keyframes change-color {
  100% {
    color: #1e73be;
  }
}
</style>