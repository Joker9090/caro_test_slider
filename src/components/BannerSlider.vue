<template>
  <div class="BannerSlider">
    <div class="Slider">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <div
            v-for="(i, index) in items"
            :key="index"
            class="image"
            :data-glide-dir="index"
            v-bind:style="{ 'background-image': 'url(' + i + ')' }"
          />
        </ul>
      </div>
      <div class="container">
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button
            v-for="(i, index) in items"
            :key="index"
            class="glide__bullet"
            :data-glide-dir="index"
          ></button>
        </div>
      </div>
    </div>
    <div class="overBox">
      <div class="content">
        <p id="caro on "> ACA EL TEXTO CARO</p>
      </div>
    </div>
    <script type="application/javascript" v-html="this.renderStatic()" />
  </div>
</template>

<script>
const items = [
  "https://dummyimage.com/601x400/db07db/fff",
  "https://dummyimage.com/602x400/db07db/fff",
  "https://dummyimage.com/603x400/db07db/fff",
  "https://dummyimage.com/601x400/db07db/fff",
  "https://dummyimage.com/602x400/db07db/fff",
  "https://dummyimage.com/603x400/db07db/fff",
];
  // https://glidejs.com/docs/events/ DOCU DE GLODE
// const aaa = "123123";
const staticDomElement = () => {
  let glideJSScript = document.createElement("script");
  glideJSScript.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js"
  );
  document.head.appendChild(glideJSScript);
  glideJSScript.onload = () => {
    /* necesario */
    document.querySelectorAll(".BannerSlider").forEach((i) => {
      const apiGlide = new window.Glide(i, {
        peek: 0,
        perView: 1,
        type: "carrusel",
        autoplay: false,
        gap: 0,
      }).mount();
      console.log('apiGlide', apiGlide);
      /*
      apiGlide.on('run.before', function () {
        const divCaro = document.getElementById("caro");
        divCaro.classList.remove("on");
        divCaro.classList.add("off")
      })
      apiGlide.on('run.after', function (params) {
        const divCaro = document.getElementById("caro");
        divCaro.classList.remove("off");
        divCaro.classList.add("on");
        divCaro.innerHTML = `Mira Caro estoy en la diapo ${ apiGlide.index}`;
        console.log('ACAAA', apiGlide.index, params);
      })
      */
    });
    /* necesario */
  };
};
export default {
  name: "BannerSlider",
  props: {
    active: Boolean,
  },
  data: () => ({
    items,
  }),
  methods: {
    renderStatic: () => {
      return `
        ${staticDomElement.toString()}
        staticDomElement();
      `;
    },
  },
  mounted() {
    //staticDomElement()
  },
  computed: {},
};
</script>

<style scoped>
.BannerSlider {
  position: relative;
  overflow: hidden;
}
.BannerSlider .Slider {
  background: rgb(30, 77, 30);
  min-height: 500px;
  height: 88vh;
  width: calc(100% - 0%); /* lo cambias a piachere */
  width: calc(100% - 30%); /* lo cambias a piachere */
  margin-left: auto;
}
.BannerSlider .overBox {
  /* display:none;*/
  /* opacity: 0.2; */
  width: 35%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0px;
}
.BannerSlider .overBox .content {
  z-index: 2;
  position: relative;
}
.BannerSlider .overBox:before {
  content: " ";
  position: absolute;
  width: 50vw;
  height: 120%;
  right: 0px;
  background: black;
  transform: rotate(-16deg) translate(7vw, 16vh);
}

.glide__slides {
  margin: 0px;
}
.BannerSlider .glide__slides .image {
  background-size: cover;
  background-position: center;
  min-height: 500px;
  height: 88vh;
}

.BannerSliderCirculo {
  width: 70%;
  padding-top: 50px;
  margin-bottom: 50px;
}
.BannerSliderCirculo .Slider {
}
.BannerSliderCirculo .circle {
  padding: 10px 0px;
}
.BannerSliderCirculo .image {
  width: 136px;
  background-position: center;
  background-size: cover;
  aspect-ratio: 1/1;
  margin: auto;
  border-radius: 100%;
  box-shadow: 0px 0px 10px;
}

.BannerSliderCirculo .data {
  text-align: center;
  width: 50%;
  margin: auto;
}

.BannerSliderCirculo .data p {
  white-space: normal;
}
#caro {
  transition: all 0.2s ease;
  color: white;
  font-size: 30px;
}
#caro.off {
  opacity: 0;
}
#caro.on {
  opacity: 1;
}
</style>
