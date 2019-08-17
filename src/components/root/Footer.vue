<template>
  <footer id="home-footer">
    <div id="footer-contents">
      <div id="fixed-info">
        <div id="footer-logo">
          <img src="../../assets/keyinside-logo.png" alt="키인사이드" width="157" height="32" />
        </div>

        <div id="recruit-info">
          <div>
            <strong>RECRUIT</strong>
            <p>recruite@key-inside.com</p>
          </div>
          <div>
            <strong>INFO</strong>

            <p>info@key-inside.com</p>
          </div>
        </div>
      </div>
      <div id="contact-info">
        <strong>CONTACT INFO</strong>

        <p>7F, 14, Teheran-ro 86-gil, Gangnam-gu, Seoul, Korea (06179)</p>
        <p>+82 070-4012-3554</p>
      </div>
    </div>
    <div id="copyright">
      <p>2018 By Keyinside. All RIghts Reserved</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
#home-footer {
  background: #1e1e1e;
  color: #b4b4b4;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Rajdhani", Arial, sans-serif;
  font-style: normal;
}
#footer-contents {
  display: flex;
  width: 70%;
}
#fixed-info {
  display: flex;
  flex-basis: 50%;
}
#footer-logo {
  flex-basis: 50%;
}
#recruit-info {
  flex-basis: 50%;
}
#recruit-info div:first-child {
  margin-bottom: 1em;
}
#contact-info {
  flex-basis: 50%;
}
#copyright {
  width: 70%;
  margin-top: 30px;
  border-top: 1px solid #303239;
  font-size: 14px;
  padding-top: 20px;
  padding-left: 30px;
}
#footer-contents p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
p {
  margin: 0;
}
/* responsive */
@media screen and (max-width: 1100px) {
  #footer-contents {
    flex-direction: column;
  }
}

@media screen and (max-width: 400px) {
  #footer-contents {
    width: 90%;
  }
  #copyright {
    display: flex;
    justify-content: center;
  }
}
</style>