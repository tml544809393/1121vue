
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false 
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: { App }, 
  template: '<App/>'
})
