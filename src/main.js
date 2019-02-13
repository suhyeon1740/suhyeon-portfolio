import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
//var VueScrollactive = require('vue-scrollactive');
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
