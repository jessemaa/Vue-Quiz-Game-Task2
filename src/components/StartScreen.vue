<template>
  <div>
    <Header />
    <md-button
      id="startButton"
      class="md-raised md-primary"
      @click="startGame()"
      >Start Game!</md-button
    >
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "StartScreen",
  components: {
    Header,
  },
  methods: {
    startGame() {
      this.$router.push("/Game");
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
</style>