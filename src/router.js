import VueRouter from 'vue-router'
import Game from './views/Game.vue'
import StartScreen from './views/StartScreen.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: StartScreen
    },
    {
        path: '/game',
        name: 'Game',
        component: Game
    }
]

const router = new VueRouter({ routes })
export default router