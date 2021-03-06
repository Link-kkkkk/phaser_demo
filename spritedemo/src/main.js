// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './index'

import VueResource from 'vue-resource'
import router from './router'
import "babel-polyfill"

window.jquery = window.jQuery = window.$ = require('jquery');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
