<template>
  <div class="ProductsSection">
    <div class="row">
      <div>
        <ProductSlider id="1" />
      </div>
      <div class="upper">
        <ProductSlider id="2" />
      </div>
      <div>
        <ProductSlider id="3" />
      </div>
      <div class="upper">
        <ProductSlider id="4" />
      </div>
      <div>
        <ProductSlider id="5" />
      </div>
    </div>
    <div class="row row-bot">
      <div class="upper">
        <ProductSlider id="6" />
      </div>
      <div>
        <ProductSlider id="7" />
      </div>
      <div class="upper">
        <ProductSlider id="8" />
      </div>
      <div>
        <ProductSlider id="9" />
      </div>
      <div class="upper">
        <ProductSlider id="10" />
      </div>
    </div>
    <script type="application/javascript" v-html="this.renderStatic()" />
  </div>
</template>

<script>
import ProductSlider from "./ProductSlider.vue";

const staticDomElement = () => {
  let glideJSScript = document.createElement("script");
  glideJSScript.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js"
  );
  document.head.appendChild(glideJSScript);
  glideJSScript.onload = () => {
    /* necesario */
    document.querySelectorAll(".product-slider").forEach((i) => {
      new window.Glide(i, {
        peek: 0,
        perView: 1,
        type: "carrusel",
        autoplay: false,
        gap: 0,
      }).mount();
    });
    /* necesario */
  };
};
export default {
  name: "ProductsSection",
  components: {
    ProductSlider,
  },
  props: {
    // items: Product[],
  },
  data: () => ({}),
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
.ProductsSection {
  position: relative;
  margin-bottom: 100px;
  max-width: 1050px;
    margin: auto;
}
.ProductsSection .row {
  display: flex;
  justify-content: space-between;
}

.ProductsSection .row div:not(.upper) {
  margin-top: 0px;
  margin-bottom: -0px;
}

.ProductsSection .row-bot div.upper {
  margin-top: -20px;
  margin-bottom: -20px;
}

.ProductsSection .row .upper {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
