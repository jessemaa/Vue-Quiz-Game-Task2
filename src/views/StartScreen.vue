<template>
  <div>
    <Header />
    <h1 class="big-header">Welcome to Vue Quiz Game!</h1>
    <md-button
      id="startButton"
      class="md-raised md-primary"
      @click="startGame()"
      >Start Game!</md-button
    >
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "StartScreen",
  components: {
    Header,
  },
  methods: {
    startGame() {
      this.$router.push("/game");
    },
  },
};
</script>

<style>
#startButton {
  position: relative;
  top: 100px;
}
.md-button {
  min-width: 20%;
}
.big-header {
  font-size: 48px;
}
</style>