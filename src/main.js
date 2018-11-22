
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false 
fastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  components: { App }, 
  template: '<App/>'
})
