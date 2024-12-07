<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <the-header msg="Настоящий Кубанский чеснок"/>
  <tabs-main></tabs-main>
  <app-form></app-form>
  <hr />
  <app-formDB></app-formDB>
  <hr />
  <news-main></news-main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TabsMain from './components/TabsMain.vue'
import NewsMain from './components/NewsMain.vue'
import AppForm from './components/AppForm.vue'
import AppFormDB from './components/AppFormDB.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TabsMain,
    NewsMain,
    AppForm,
    AppFormDB
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

textarea {
	resize: none;
}

*::placeholder {
  color: gray;
  font-size: .8em;
}

select.form-select {
  width: 30%;
}
</style>
