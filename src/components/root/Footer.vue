<template>
  <footer>
    <div id="footer-contents">
      <div id="fixed-info">
        <div>
          <img src="../../assets/main/keyinside-logo.png" alt="키인사이드" width="157" height="32" />
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

<style>
p {
  margin: 0;
}

footer {
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #1e1e1e;
  color: #b4b4b4;
}

#footer-contents {
  width: 1170px;
  margin-top: 100px;
  display: flex;
}

#footer-contents p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

#fixed-info {
  display: flex;
  flex-basis: 48%;
}

#fixed-info > div:first-child {
  flex-basis: 53.5%;
}

#recruit-info div:first-child {
  margin-bottom: 1em;
}

#contact-info {
  padding-left: 35px;
}

#copyright {
  width: 1170px;
  margin-top: 30px;
  padding: 23px 0 15px 30px;
  border-top: 1px solid #303239;
  font-size: 14px;
}

/* responsive */
@media screen and (max-width: 1200px) {
  footer {
    height: 100%;
  }

  #footer-contents {
    width: 70%;
    flex-direction: column;
  }

  #copyright {
    width: 70%;
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