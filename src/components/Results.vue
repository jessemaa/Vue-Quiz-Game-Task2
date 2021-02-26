<template>
<div>
    <h1 class="big-header">{{points}} points</h1>
<div>
    <h1>Here are correct answers</h1>
    <div v-for="(corAnswer, index) in correctAnswer" :key="index+10">
        <p>Correct answer was: {{ corAnswer }}</p>
    </div>
    <h1>Here are your answers</h1>
    <div v-for="(selAnswer, index) in selectedAnswer" :key="index">
        <p>Your answer was: {{ selAnswer }}</p>
    </div>
</div>
<br>
</div>
</template>
<script>

export default {
  name: 'Results',
  props: {
      correctAnswer: Array,
      selectedAnswer: Array,
      points: Number
  }
}
</script>
