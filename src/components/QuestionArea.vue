<template>
<div>
    <h1>{{ questions.question }}</h1>
    <md-button
        v-for="(answer, index) in shuffledAnswers" :key="index"
        @click="selectAnswer(index)"
        class="md-raised md-primary"
        :class="[selectedIndex === index ? 'selected' : '']"
    >
        {{ answer }}
    </md-button>
    <br/>
    <div>
        <md-button @click="submit" class="md-raised">Submit</md-button>
        <md-button @click="next" class="md-raised">Next</md-button>
    </div>
</div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        questions: Object,
        next: Function,
        addPoints: Function
    },
    data() {
        return {
            selectedIndex: null,
            shuffledAnswers: []
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

            this.addPoints(isCorrect)
        }
    },
    mounted() {
        this.shuffleAnswers()
    }
}
</script>

<style scoped>
    .selected {
        border: 3px solid rgb(74, 212, 74);
    }
</style>