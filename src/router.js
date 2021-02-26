import VueRouter from 'vue-router'
import Game from './components/Game.vue'
import StartScreen from './components/StartScreen.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: StartScreen
    },
    {
        path: '/game',
        name: 'game',
        component: Game

    }
]

const router = new VueRouter({ routes })
export default router