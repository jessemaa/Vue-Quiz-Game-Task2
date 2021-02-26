<template>
<div>
    <h1>Here are correct answers</h1>
    <div v-for="(answer, index) in this.$route.query.correctAnswer" :key="index">
        <p>Correct answer was: {{ answer }}</p>
    </div>
    <h1>Here are your answers</h1>
    <div v-for="(answer, index) in this.$route.query.selectedAnswer" :key="index">
        <p>Your answer was: {{ answer }} {{points}}</p>
    </div>
</div>
</template>
<script>

export default {
  name: 'Results',
  methods: {
      calculateScore() {
          let correct = this.$route.query.correctAnswer
          let selected = this.$route.query.selectedAnswer
          let points = 0
          for (let i = 0; correct.length(); i++) {
              if (correct[i] === selected[i]) {
                  points++
              }
          }
          return points
      }
  }
}
</script>
