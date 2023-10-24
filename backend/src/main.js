import { createApp } from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './index.css'
import 'tw-elements'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueFullPage from 'vue-fullpage.js'

library.add(faChevronLeft, faChevronRight)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueFullPage)
.use(store)
.use(router)
.mount('#app')
