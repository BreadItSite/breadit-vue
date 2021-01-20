import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVueIcons } from 'bootstrap-vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
  id: "UA-187832019-1",
  router
})

Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(Vuesax)
Vue.config.productionTip = false

library.add(faArrowUp, faArrowDown, faPepperHot)
Vue.component('font-awesome-icon', FontAwesomeIcon)

axios.defaults.baseURL = 'https://bread-it-site.herokuapp.com/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

