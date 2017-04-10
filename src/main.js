// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { store, questionsDataRef } from './store/store.js'
import { mapGetters } from 'vuex'

import App from './App'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App },

  computed: Vuex.mapGetters(['questionsData']),

  created () {
    this.$store.dispatch('setQuestionsDataRef', questionsDataRef)
    console.log(questionsDataRef);
  }
})
