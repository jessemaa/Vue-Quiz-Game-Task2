import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle)
library.add(faArrowCircleRight)
library.add(faQuestion)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
