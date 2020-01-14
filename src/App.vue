<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-btn @click="isMenuActive = !isMenuActive">Menu</b-btn>
    <Menu @triggerMenu="doTriggerMenu" :menuActive="isMenuActive"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    doTriggerMenu() {
      this.isMenuActive = false;
    },
  },
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
