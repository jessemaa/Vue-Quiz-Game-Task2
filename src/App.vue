<template>
  <div id="app">
    <Header />
    <QuestionArea
      v-if="questions.length"
      :questions="questions[index]"
      :next="next"
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
      index: 0
    }
  },
  methods: {
    next() {
      this.index++
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
