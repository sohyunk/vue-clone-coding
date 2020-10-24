<template>
  <div id="app">
    <router-view id="main-view"></router-view>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

import router from './router'

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    router.push('/', () => {});
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:320px;
  height:568px;
}
#main-view {
  width: 320px;
  height: 518px;
}
</style>
