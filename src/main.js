import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
