import VueRouter from 'vue-router'
import Game from './components/Game.vue'
import ResultScreen from './components/ResultScreen.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Game
},
{
    path: '/results',
    name: 'Results',
    component: ResultScreen
}]

const router = new VueRouter({ routes })
export default router