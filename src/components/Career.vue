<template>
  <article>
    <PageTitle title="Join With Us" titleId="join-with-us"></PageTitle>

    <section id="about">
      <div>
        <div id="about-1">
          <p>
            keyinside는 회사와 사람 모두에게 스며드는 블록체인 플랫폼 크리에이터들이 모여있는 회사입니다.
            <br />블록체인이 어려운 기술이 아닌, 생활 속 편리함으로 블록체인 서비스를 함께 개발할 새로운 크리에이터를 찾습니다.
          </p>
        </div>

        <div id="about-2">
          <h3>About keyinside company keystone</h3>
          <p>키인사이드는 공개가능한 모든 정보를 keystone 웹사이트를 통해 제공하고 있습니다. keystone은 keyinside의 조직원, 그들과 함께 하는 일상, 문화 채용정보 등에 대한 내용이 담겨있습니다.</p>

          <ul>
            <li>
              keystone 바로가기 :
              <a
                href="https://keystone.key-inside.com/"
                target="_blank"
              >https://keystone.key-inside.com/</a>
            </li>
            <li>
              문화 :
              <a
                href="https://keystone.key-inside.com/culture"
                target="_blank"
              >https://keystone.key-inside.com/culture</a>
            </li>
            <li>
              채용 :
              <a
                href="https://keystone.key-inside.com/career"
                target="_blank"
              >https://keystone.key-inside.com/career</a>
            </li>
            <li>
              인재상 :
              <a
                href=" https://keystone.key-inside.com/career/right-people-for-keinside"
                target="_blank"
              >https://keystone.key-inside.com/career/right-people-for-keinside</a>
            </li>
          </ul>
        </div>

        <div id="about-3">
          <h3>Available Job Position</h3>
          <h4>[개발자 상시 채용]</h4>
          <p>
            채용 공고 :
            <a
              href="https://keystone.key-inside.com/career/available-positions/recruit-developer"
              target="_blank"
            >https://keystone.key-inside.com/career/available-positions/recruit-developer</a>
          </p>
          <h4>[서비스 기획자 채용]</h4>
          <p>
            채용공고 :
            <a
              href="https://keystone.key-inside.com/career/available-positions/pm"
              target="_blank"
            >https://keystone.key-inside.com/career/available-positions/pm</a>
          </p>
        </div>
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
#about {
  display: flex;
  justify-content: center;
  padding: 120px 0;
  animation: careerContentsFadeIn 1s;
}

#about h3 {
  margin: 0 0 10px 0;
  color: #2c69d5;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.42857143;
}

#about h4 {
  margin: 0;
  color: #777;
}

#about p {
  margin: 0 0 10px;
  color: #777;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.05px;
}

#about a {
  text-decoration: none;
  color: #333;
  transition: 0.3s ease;
}

#about a:hover {
  color: #1e73be;
}

#about > div:first-child {
  width: 1170px;
  height: 503px;
}

#about-1 {
  margin-bottom: 40px;
}

#about-1 > p {
  color: #222222;
}

#about-2 > ul {
  margin: 0 0 46px 0;
  list-style-type: disc;
  color: #333;
  font-size: 14px;
  line-height: 1.42857143;
}

/* responsive */
@media screen and (max-width: 1200px) {
  #about > div:first-child {
    width: 80%;
  }
}

/* animation */
@keyframes careerContentsFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  100% {
    opacity: 100%;
  }
}
</style>