<template>
  <div class="hello">
    <div class="text-with-hover">
      <a><h2 :style="styleFont">{{ text }}</h2></a>
      <div class="underline" :style="style"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnderlineLink",
  props: {
    text: String,
    size: Number,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-with-hover {
  position: relative;
  display: flex;
  width: fit-content;
}
.underline {
  transition: all 0.2s ease;
  content: "";
  background-color: green;
  max-width: 0%;
  position: absolute;
  height: 4px;
  bottom: 0px;
  left: 0px;
}
.text-with-hover a {
  cursor: pointer;
  position: relative;
  padding: 5px 0px;
}
.text-with-hover a h2 {
  margin: 0px;
}
.text-with-hover:hover .underline {
  max-width: 100%;
}
</style>
