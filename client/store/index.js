import Vue from 'vue'
import Vuex from 'vuex'

import folder from './folder'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    folder
  }
})

export default store
