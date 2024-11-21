<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <the-header msg="Настоящий Кубанский чеснок"/>
  <tabs-main></tabs-main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TabsMain from './components/TabsMain.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TabsMain
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
