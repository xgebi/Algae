import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (createElement) => {
    return createElement(App, { attrs: { token: 'Hello Sarah', uuid: '123' } })
  }
}).$mount('#app')