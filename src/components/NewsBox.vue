 <template>
  <div id="news-box" :key="source.id">
    <span id="type" :key="source.id">{{source.type}}</span>

    <span id="link-box">
      <a id="link" :href="source.link" :key="source.title">{{source.title}}</a>
    </span>
    <span id="additional-info" :key="source.additionalInfo">{{source.additionalInfo}}</span>
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
<style>
#news-box {
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 15%;
  top: 70%;
  left: 25%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
  font-family: Rajdhani;
  animation: box-fade 1s;
}
#type {
  font-size: 0.8em;
  font-weight: 600;
  color: rgb(197, 164, 119);
  letter-spacing: 3px;
}
#link-box {
  width: 80%;
  text-align: center;
}
#link {
  font-size: 2.4em;
  color: rgb(45, 48, 50);
  text-decoration: none;
  cursor: pointer;
}
#link:hover {
  text-decoration-line: underline;
}
#additional-info {
  text-align: center;
  font-size: 1em;
  color: rgba(45, 48, 50, 0.75);
}
@media screen and (max-width: 400px) {
  #news-box {
    top: 50%;
  }
  #link {
    font-size: 1em;
  }
}

@keyframes box-fade {
  0% {
    /* height: 0%; */
    transform: scaleX(1) scaleY(0);

    transform-origin: bottom;
  }
  100% {
  }
}
</style>