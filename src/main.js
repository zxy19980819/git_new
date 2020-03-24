import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(vueaxios,axios)
import 'view-design/dist/styles/iview.css';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
