<template>
  <div class="ProductSlider">
    <div class="product-slider">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(diapo, i) in diapos" :key="i">
            <div
              v-if="i == 0"
              class="main-product-diapo"
              :style="buildMainImage(diapo.image)"
            >
              <div class="logo" :style="buildLogo(diapo.logo)" />
            </div>

            <div v-if="i != 0" class="product-diapo">
              <img :src="diapo.image" />
              <p>{{ diapo.description }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          A
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          {{">"}}
        </button>
      </div>
      <div class="container">
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <li v-for="(_, i) in diapos" :key="i">
            <p class="f-Noe-bold f-80 f-mobile-46 lh-80 c-white">
              {{ i }}
            </p>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const productSlider = {
  id: 0,
  brand: "",
  logo: "",
  image: "",
  items: [
    { image: "", name: "", description: "", price: "" },
    { image: "", name: "", description: "", price: "" },
    { image: "", name: "", description: "", price: "" },
    { image: "", name: "", description: "", price: "" },
    { image: "", name: "", description: "", price: "" },
  ],
};

const diapos = [
  { logo: productSlider.logo, image: productSlider.image },
  ...productSlider.items,
];

console.log("diapos", diapos);

export default {
  name: "ProductsSection",
  props: {
    id: String,
    // items: Product[],
  },
  data: () => ({
    diapos,
  }),
  methods: {
    buildLogo: (logo) => {
      return `backgroundImage: url${logo}`;
    },
    buildMainImage: (image) => {
      return `backgroundImage: url${image}`;
    },
  },
  computed: {},
};
</script>

<style scoped>
.ProductSlider {
  position: relative;
  height: 300px;
  width: 200px;
  background-color: grey;
}

.ProductSlider ul li {
  width: 100%;
}
.ProductSlider .main-product-diapo {
  width: 100%;
  height: 300px;
  position: relative;
  background: green;
}
.ProductSlider .main-product-diapo .logo {
  width: 50px;
  height: 50px;
  background: white;
  opacity: 0.6;
  position: absolute;
  left: 15px;
  top: 15px;
}
.ProductSlider .product-diapo {
  width: 100%;
  height: 300px;
  position: relative;
  background: red;
}
</style>
