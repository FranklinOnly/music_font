import Vue from 'vue'
import App from './App.vue'
import {useRouter} from './router'
import store from './store'
import ElementUI from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL='http://localhost:8080'
axios.defaults.withCredentials=true

Vue.prototype.$axios=axios
Vue.use(ElementUI)
Vue.config.productionTip = false
let router = useRouter
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')