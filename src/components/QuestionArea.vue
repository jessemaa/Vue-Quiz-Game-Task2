<template>
<div>
    <h1>{{ questions.question }}</h1>
    <md-button
        v-for="(answer, index) in answers" :key="index"
        @click="selectAnswer(index)"
        class="md-raised md-primary"
        :class="[selectedIndex === index ? 'selected' : '']"
    >
        {{ answer }}
    </md-button>
    <br/>
    <div>
        <md-button class="md-raised">Submit</md-button>
        <md-button @click="next" class="md-raised">Next</md-button>
    </div>
</div>
</template>

<script>
import _ from 'lodash'
export default {
    props: {
        questions: Object,
        next: Function
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
            console.log(this.shuffledAnswers)
        }
    },
    mounted() {
        this.shuffledAnswers()
    }
}
</script>

<style scoped>
    .selected {
        border: 3px solid rgb(74, 212, 74);
    }
</style>