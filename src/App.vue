<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import Game from "./components/Game.vue";
//import StartScreen from "./components/StartScreen.vue";

export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fffdf9;
}

body {
  background-color: #1a6690;
}
</style>
