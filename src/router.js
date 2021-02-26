import VueRouter from 'vue-router'
import Game from './components/Game.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Game
}]

const router = new VueRouter({ routes })
export default router