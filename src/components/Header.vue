<template>
    <div>
        <md-toolbar class="md-primary">
            <h3 class="md-title">Vue Quiz Game</h3>
            <h3 class="md-title">{{ correctAnswers }} / {{ totalAnswers }}</h3>
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