import Vuex from 'vuex'
import Vue from 'vue'

import counter from './module/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter: {
      namespaced: true,
      ...counter
    }
  }
})

export default store
