<template>
<div>
    <Results
        v-if="lastQuestion"
        :correctAnswer="correctAnswer"
        :selectedAnswer="selectedAnswer"
        :points="points"
    />
    <div v-if="!lastQuestion">
    <h1>{{ questions.question }}</h1>
    <md-button
        v-for="(answer, index) in shuffledAnswers" :key="index"
        @click="selectAnswer(index)"
        class="md-raised md-primary"
        :class="[
            !answered && selectedIndex === index ? 'selected' :
            answered && correctIndex === index ? 'correct' :
            answered && selectedIndex === index && correctIndex !== index ? 'incorrect' : ''
        ]"
    >
        {{ answer }}
    </md-button>
    <br/>
    <div>
        <md-button
            @click="submit"
            :disabled="selectedIndex === null || answered"
            class="md-raised"
        >
        <font-awesome-icon icon="check-circle" />&nbsp;Submit
        </md-button>
        <md-button
            @click="next"
            :disabled="!answered || lastQuestion"
            class="md-raised"
        >
        <font-awesome-icon icon="arrow-circle-right" />&nbsp;Next
        </md-button>
        <router-link :to="{ path: '/results', query: { correctAnswer, selectedAnswer }}"><md-button
            v-if="lastQuestion"
            class="md-raised"
        >
        See Results
        </md-button></router-link>
        
    </div>
    </div>
</div>
</template>

<script>
import _ from 'lodash'
import Results from './Results.vue'
export default {
    components: {
        Results
    },
    props: {
        questions: Object,
        next: Function,
        addPoints: Function,
        lastQuestionIndex: Number
    },
    data() {
        return {
            selectedIndex: null,
            correctIndex: null,
            shuffledAnswers: [],
            answered: false,
            questionNumber: 0,
            lastQuestion: false,
            correctAnswer: [],
            selectedAnswer: [],
            points: 0
        }
    },
    computed: {
        answers() {
            let answers = [...this.questions.incorrect_answers]
            answers.push(this.questions.correct_answer)
            return answers
        }
    },
    watch: {
        questions() {
            this.selectedIndex = null
            this.answered = false
            this.shuffleAnswers()
        }
    },
    methods: {
        selectAnswer(index) { 
            this.selectedIndex = index
        },
        shuffleAnswers() {
            let answers = [...this.questions.incorrect_answers, this.questions.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.questions.correct_answer)
        },
        submit() {
            let isCorrect = false
            if (this.selectedIndex === this.correctIndex) {
                isCorrect = true
            }
            this.answered = true
            this.addPoints(isCorrect)
            this.questionNumber++
            this.correctAnswer.push(this.shuffledAnswers[this.correctIndex])
            this.selectedAnswer.push(this.shuffledAnswers[this.selectedIndex])
            if (this.questionNumber === this.lastQuestionIndex + 1) {
                this.lastQuestion = true
            }
            this.calculatePoints()
        },
        calculatePoints() {
            if (this.correctAnswer[this.questionNumber - 1] === this.selectedAnswer[this.questionNumber -1]) { this.points += 10 }
        }
    },
    mounted() {
        this.shuffleAnswers()
    }
}
</script>

<style scoped>
    .selected {
        border: 3px solid rgb(110, 69, 206);
    }
    .correct {
        border: 3px solid rgb(51, 209, 51);
    }
    .incorrect {
        border: 3px solid rgb(194, 56, 56);
    }
    a:link {
    text-decoration: none;
    }
</style>