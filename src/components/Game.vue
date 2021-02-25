<template>
  <div>
    <Header
      :correctAnswers="correctAnswers"
      :totalAnswers="totalAnswers"
    />
    <div class="question-area">
        <QuestionArea
            v-if="questions.length"
            :questions="questions[index]"
            :next="next"
            :addPoints="addPoints"
        />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import QuestionArea from './QuestionArea.vue'

export default {
  name: 'Game',
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
    fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple', {
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

<style scoped>
.question-area {
    width: 50%;
    margin: 0 auto;
    padding-top: 50px;
}
</style>
