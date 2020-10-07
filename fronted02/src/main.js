import Vue from 'vue'
import './plugins/vuetify'
import store from './store.js'
import App from './App.vue'
import Vuetify from 'vuetify'


import Messages from './components/Messages'
import NewMessages from './components/NewMessages'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Messages},
  { path: '/NewMessage', component: Messages}
]

const router = new VueRouter ({routes})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
