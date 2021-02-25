<template>
    <div>
        <md-toolbar class="md-primary">
            <h3 class="md-title">
                <font-awesome-icon icon="question" />
                &nbsp;Vue Quiz Game
            </h3>
            <h3 class="md-title">
                <font-awesome-icon icon="check-circle" />
                &nbsp;Correct Answers: {{ correctAnswers }}/10&nbsp;<font-awesome-icon icon="arrow-circle-right" />
                &nbsp;Answered: {{ totalAnswers }}
            </h3>
        </md-toolbar>
    </div>
</template>

<script>
export default {
    props: [
        'correctAnswers',
        'totalAnswers'
    ]
}
</script>