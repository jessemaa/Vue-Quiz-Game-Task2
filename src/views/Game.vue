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
            :lastQuestionIndex="lastQuestionIndex"
        />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import QuestionArea from '../components/QuestionArea.vue'

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
      totalAnswers: 0,
      lastQuestionIndex: 0
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
        this.lastQuestionIndex = this.questions.length - 1
    })
  }
}
</script>

<style scoped>
.question-area {
    width: 70vw;
    margin: 0 auto;
    padding-top: 50px;
}
</style>
