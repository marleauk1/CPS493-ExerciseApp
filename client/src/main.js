import Vue from 'vue'
import App from './App.vue'

import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/ass.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')