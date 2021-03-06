// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import ToggleButton from 'vue-js-toggle-button'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(ToggleButton)

Vue.use(VueAnalytics, {
  id: 'UA-118897279-1',
  router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
