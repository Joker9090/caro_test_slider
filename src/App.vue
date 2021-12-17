<template>
  <div id="app">
    <ProductMenu :active="true" />
    <UnderlineLink size="100" text="HOLA" />
    <Slider />
  </div>
</template>

<script>
import UnderlineLink from './components/UnderlineLink.vue'
import Slider from './components/Slider.vue'
import ProductMenu from './components/ProductMenu.vue'

export default {
  name: 'App',
  components: {
    UnderlineLink,
    Slider,
    ProductMenu,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
