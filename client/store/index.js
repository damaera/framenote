import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import folders from './folders'
import files from './files'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
    folders,
    files
  }
})

export default store
