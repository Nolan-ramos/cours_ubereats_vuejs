<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './page/homePage.vue';
export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
@import url('style/reseet.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding:50px;
}
</style>
