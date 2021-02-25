<template>
  <div id="app">
    <Header
      :correctAnswers="correctAnswers"
      :totalAnswers="totalAnswers"
    />
    <QuestionArea
      v-if="questions.length"
      :questions="questions[index]"
      :next="next"
      :addPoints="addPoints"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionArea from './components/QuestionArea.vue'


export default {
  name: 'App',
  components: {
    Header,
    QuestionArea
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswers: 0,
      totalAnswers: 0
    }
  },
  methods: {
    next() {
      this.index++
    },
    addPoints(isCorrect) {
      if (isCorrect) {
        this.correctAnswers++
      }
      this.totalAnswers++
    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
    })
      .then((jsonData) => {
        this.questions = jsonData.results
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFDF9;
}

body {
  background-color: #1A6690;
}
</style>
