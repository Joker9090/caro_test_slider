<template>
  <div class="slider">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li v-for="(items, i) in itemsParser" :key="i">
          <div v-for="(item, i) in items" :key="i">
            <p class="f-Noe-bold f-80 f-mobile-46 lh-80 c-white">
              {{ item.logo }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <li v-for="(item, i) in items" :key="i">
          <p class="f-Noe-bold f-80 f-mobile-46 lh-80 c-white">
            {{ i }}
          </p>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";
const brandItems = [
  { id: 0, logo: "0" },
  { id: 1, logo: "1" },
  { id: 2, logo: "2" },
  { id: 3, logo: "3" },
  { id: 4, logo: "4" },
  { id: 5, logo: "5" },
  { id: 6, logo: "6" },
  { id: 7, logo: "7" },
  { id: 8, logo: "8" },
  { id: 9, logo: "9" },
  { id: 10, logo: "10" },
  { id: 11, logo: "11" },
  { id: 12, logo: "12" },
  { id: 13, logo: "13" },
  { id: 14, logo: "14" },
  { id: 15, logo: "15" },
  { id: 16, logo: "16" },
  { id: 17, logo: "17" },
  { id: 18, logo: "18" },
  { id: 19, logo: "19" },
  { id: 20, logo: "20" },
  { id: 21, logo: "21" },
  { id: 22, logo: "22" },
  { id: 23, logo: "23" },
  { id: 24, logo: "24" },
  { id: 25, logo: "25" },
  { id: 26, logo: "26" },
  { id: 27, logo: "27" },
  { id: 28, logo: "28" },
  { id: 29, logo: "29" },
  { id: 30, logo: "30" },
  { id: 31, logo: "31" },
  { id: 32, logo: "32" },
  { id: 33, logo: "33" },
  { id: 34, logo: "34" },
  { id: 35, logo: "35" },
];
/*
const parseItems = (_items) => {
  let tempArray = [];
  let tempArrayChunk = [];

  _items.forEach((i, index) => {
    tempArrayChunk.push(i);
    if (index + 1  && ((index + 1) % 12 == 0) || index +1 == _items.length) {
      tempArray.push(tempArrayChunk);
      tempArrayChunk = [];
    }
  });
  return tempArray;
};
*/
const parseItems = (_items, arr = []) => {
  arr.push(_items.splice(0, 12));
  return _items.length > 0 ? parseItems(_items, arr) : arr;
};

const itemsParser = parseItems(brandItems);
export default {
  name: "Slider",
  props: {},
  data: () => ({
    itemsParser: itemsParser,
  }),
  mounted() {
    console.log("Mounted");
    new Glide(".slider", {
      peek: 0,
      perView: 1,
      type: "carrusel",
      autoplay: false,
      gap: 0,
    }).mount();
  },
  computed: {
    styleFont() {
      return `font-size: ${this.size}px`;
    },
    style() {
      return `width: ${this.size * 1.5}px`;
    },
  },
};
</script>

<style scoped>
li {
  width: 554px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li div {
  min-width: 15%;
  aspect-ratio: 1/1;
  background: grey;
  margin-bottom: 10px;
}
li div p {
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
